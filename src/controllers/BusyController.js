import store from "../store";

export default class BusyController {
  static setBusy(message) {
    store.commit("setBusyStatus", true);
    store.commit("setBusyMessage", message);
  }

  static setFree() {
    store.commit("setBusyStatus", false);
  }
}
