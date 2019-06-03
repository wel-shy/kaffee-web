import Axios from "axios";
import store from "../store";
import { constants } from "../Constants";
import NotificationController from "./NotificationController";

export default class AuthController {
  static async register(email, password) {
    let response;
    try {
      response = await Axios.post(`${constants.apiUrl}/auth/register`, {
        email,
        password
      });
    } catch (error) {
      NotificationController.setError("Could not register an account.");
      return;
    }

    const refreshToken = response.data.payload.refreshToken;
    const token = response.data.payload.token;

    store.commit("setAuthToken", token);
    store.commit("setRefreshToken", refreshToken);
  }

  static async login(email, password) {
    let response;
    try {
      response = await Axios.post(`${constants.apiUrl}/auth/authenticate`, {
        email,
        password
      });
    } catch (error) {
      NotificationController.setError("Username or password is incorrect.");
      return;
    }

    const refreshToken = response.data.payload.refreshToken;
    const token = response.data.payload.token;

    store.commit("setAuthToken", token);
    store.commit("setRefreshToken", refreshToken);
  }

  static async fetchToken() {
    const refreshToken = localStorage.getItem("refreshToken");
    let response;
    try {
      response = await Axios.post(`${constants.apiUrl}/auth/token`, {
        refreshToken
      });
    } catch (error) {
      NotificationController.setError("Could not restore session.");
      return;
    }

    const token = response.data.payload.token;
    store.commit("setAuthToken", token);
  }

  static async deleteAccount() {
    try {
      await Axios.delete(`${constants.apiUrl}/user`, {
        headers: { "x-access-token": store.getters.getAuthToken }
      });
    } catch (error) {
      NotificationController.setError("Could not delete your account.");
      return false;
    }

    return true;
  }

  static validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
