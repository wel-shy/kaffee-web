const state = {
  authToken: "",
  refreshToken: ""
};

const mutations = {
  setAuthToken: (state, token) => {
    state.authToken = token;
  },

  setRefreshToken: (state, token) => {
    localStorage.setItem("refreshToken", token);
    state.refreshToken = token;
  }
};

const actions = {};

const getters = {
  getAuthToken: state => state.authToken,
  getRefreshToken: state => state.refreshToken
};

export default {
  state,
  mutations,
  actions,
  getters
};
