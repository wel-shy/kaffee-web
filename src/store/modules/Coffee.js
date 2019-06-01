const state = {
  count: 0
};
const mutations = {
  incrementCount: state => {
    state.count += 1;
  },

  setCount: (state, count) => {
    state.count = count;
  }
};
const actions = {};
const getters = {
  getCount: state => state.count
};

export default {
  state,
  mutations,
  actions,
  getters
};
