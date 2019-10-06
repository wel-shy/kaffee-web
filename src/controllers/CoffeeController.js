import Axios from "axios";
import store from "../store";
import { constants } from "../Constants";
import NotificationController from "./NotificationController";
import BusyController from "./BusyController";

export default class CoffeeController {
  /**
   * Log a coffee remotely.
   * @param {Coffee} coffee
   */
  static async addCoffee(coffee) {
    BusyController.setBusy("Logging coffee");
    let response;
    try {
      response = await Axios.post(
        `${constants.apiUrl}/coffee`,
        {
          Latitude: store.getters.getCoords[0],
          Longitude: store.getters.getCoords[1],
          Type: coffee.replace(/\s/g, ""),
          From: "kaffee.dwelsh.uk"
        },
        {
          headers: { Authorization: `Bearer ${store.getters.getAuthToken}` }
        }
      );
    } catch (error) {
      BusyController.setFree();
      NotificationController.setError("Could not log a coffee.");
      return;
    }

    store.commit("incrementCount");
    store.commit("addCoffee", response.data);
    BusyController.setFree();
  }

  static async getCoffeeCount() {
    BusyController.setBusy("Fetching coffee");
    let response;
    try {
      response = await Axios.get(`${constants.apiUrl}/coffee/`, {
        headers: { Authorization: `Bearer ${store.getters.getAuthToken}` }
      });
    } catch (error) {
      BusyController.setFree();
      NotificationController.setError("Could not fetch coffee count.");
      return;
    }
    const count = response.data.length;
    store.commit("setCount", count);
    store.commit("setCoffee", response.data);

    BusyController.setFree();
  }
}
