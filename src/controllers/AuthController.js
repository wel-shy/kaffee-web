import Axios from "axios";
import store from "../store";
import { constants } from "../Constants";

export default class AuthController {
  static apiUrl = "http://localhost:3000/api";

  static async register(email, password) {
    let response;
    try {
      response = await Axios.post(`${constants.apiUrl}/auth/register`, {
        email,
        password
      });
    } catch (error) {
      console.error(error);
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
      console.error(error);
      return;
    }

    const refreshToken = response.data.payload.refreshToken;
    const token = response.data.payload.token;

    store.commit("setAuthToken", token);
    store.commit("setRefreshToken", refreshToken);
  }
}
