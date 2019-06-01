import Axios from "axios";
import store from "../store";
import { constants } from "../Constants";

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
      console.error(error);
      return;
    }

    store.commit("incrementCount");
  }
}
