const state = {
  lat: null,
  lon: null
};
const mutations = {
  setCoords: (state, position) => {
    state.lat = position.coords.latitude;
    state.lon = position.coords.longitude;
  }
};
const actions = {};
const getters = {
  getCoords: state => [state.lat, state.lon]
};

export default {
  state,
  mutations,
  actions,
  getters
};
