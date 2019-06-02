import Axios from "axios";
import store from "../store";
import { constants } from "../Constants";
import NotificationController from "./NotificationController";

export default class CoffeeController {
  static async addCoffee() {
    try {
      await Axios.post(
        `${constants.apiUrl}/coffee`,
        {},
        {
          headers: { "x-access-token": store.getters.getAuthToken }
        }
      );
    } catch (error) {
      NotificationController.setError("Could not log a coffee.");
      return;
    }

    store.commit("incrementCount");
  }

  static async getCoffeeCount() {
    let response;
    try {
      response = await Axios.get(`${constants.apiUrl}/coffee/count`, {
        headers: { "x-access-token": store.getters.getAuthToken }
      });
    } catch (error) {
      NotificationController.setError("Could not fetch coffee count.");
      return;
    }
    const count = response.data.payload.count;
    store.commit("setCount", count);
  }
}
