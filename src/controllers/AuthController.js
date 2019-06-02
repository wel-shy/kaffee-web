import Axios from "axios";
import store from "../store";
import { constants } from "../Constants";

export default class AuthController {
  static async register(email, password) {
    let response;
    try {
      response = await Axios.post(`${constants.apiUrl}/auth/register`, {
        email,
        password
      });
    } catch (error) {
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
      return false;
    }

    return true;
  }
}
