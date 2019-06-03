const state = {
  busy: false,
  message: ""
};
const mutations = {
  setBusyStatus: (state, busy) => {
    state.busy = busy;
  },

  setBusyMessage: (state, message) => {
    state.message = message;
  }
};
const actions = {};
const getters = {
  getBusyStatus: state => state.busy,
  getBusyMessage: state => state.message
};

export default {
  state,
  mutations,
  actions,
  getters
};
