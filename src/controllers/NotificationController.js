import store from "../store";

export default class NotificationController {
  static setError(message) {
    store.commit("setMessage", message);
    store.commit("setVisible", true);
  }
}
