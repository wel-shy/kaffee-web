import Axios from "axios";
import store from "../store";
import { constants } from "../Constants";
import NotificationController from "./NotificationController";
import BusyController from "./BusyController";

export default class AuthController {
  static async register(email, password) {
    BusyController.setBusy("Registering account");
    let response;
    try {
      response = await Axios.post(`${constants.apiUrl}/user/`, {
        email,
        password
      });
    } catch (error) {
      BusyController.setFree();
      NotificationController.setError("Could not register an account.");
      return;
    }

    const refreshToken = response.data.refreshToken;
    store.commit("setRefreshToken", refreshToken);

    BusyController.setFree();

    await this.fetchToken();
  }

  static async login(email, password) {
    BusyController.setBusy("Logging in");
    let response;
    try {
      response = await Axios.post(`${constants.apiUrl}/token/login`, {
        email,
        password
      });
    } catch (error) {
      BusyController.setFree();
      NotificationController.setError("Username or password is incorrect.");
      return;
    }

    const refreshToken = response.data.refreshToken;
    const token = response.data.token;

    store.commit("setAuthToken", token);
    store.commit("setRefreshToken", refreshToken);

    BusyController.setFree();

    return token;
  }

  static async fetchToken() {
    BusyController.setBusy("Logging in");
    const refreshToken = localStorage.getItem("refreshToken");
    let response;
    try {
      response = await Axios.post(`${constants.apiUrl}/token/refresh`, {
        refreshToken
      });
    } catch (error) {
      BusyController.setFree();
      NotificationController.setError("Could not restore session.");
      return;
    }

    const token = response.data.token;
    store.commit("setAuthToken", token);

    BusyController.setFree();
    return token;
  }

  static async deleteAccount() {
    BusyController.setBusy("Deleting account");
    try {
      await Axios.delete(`${constants.apiUrl}/user`, {
        headers: { Authorization: `Bearer ${store.getters.getAuthToken}` }
      });
    } catch (error) {
      BusyController.setFree();
      NotificationController.setError("Could not delete your account.");
      return false;
    }

    BusyController.setFree();
    return true;
  }

  static validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
