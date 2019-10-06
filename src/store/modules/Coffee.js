const state = {
  count: 0,
  coffee: []
};

const mutations = {
  incrementCount: state => {
    state.count += 1;
  },

  setCount: (state, count) => {
    state.count = count;
  },

  setCoffee: (state, coffee) => {
    state.coffee = coffee;
  },

  addCoffee: (state, coffee) => {
    state.coffee.push(coffee);
  }
};
const actions = {};

const getters = {
  getCount: state => state.count,

  getCoffee: state => state.coffee
};

export default {
  state,
  mutations,
  actions,
  getters
};
