const state = {
  message: "",
  visible: false
};
const mutations = {
  setMessage: (state, message) => {
    state.message = message;
  },

  setVisible: (state, visibility) => {
    state.visible = visibility;
  }
};
const actions = {};
const getters = {
  getMessage: state => state.message,
  getVisibility: state => state.visible
};

export default {
  state,
  mutations,
  actions,
  getters
};
