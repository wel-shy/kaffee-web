const state = {
  leaderboards: [],
  leaderboardData: [],
  activeLeaderboard: ""
};

const mutations = {
  setLeaderboards: (state, leaderboards) => {
    state.leaderboards = leaderboards;
  },

  setLeaderboardData: (state, leaderboardData) => {
    const idx = state.leaderboardData.findIndex(
      board => board.leaderboard.id === leaderboardData.leaderboard.id
    );
    if (idx >= 0) {
      state.leaderboardData[idx] = leaderboardData;
      return;
    }

    state.leaderboardData.push(leaderboardData);
  },

  setActiveLeaderboard: (state, id) => {
    state.activeLeaderboard = id;
  },

  addLeaderboard: (state, leaderboard) => {
    state.leaderboards.push(leaderboard);
  },

  removeLeaderboard: (state, id) => {
    state.leaderboards = state.leaderboards.filter(board => board.id !== id);
    state.leaderboardData = state.leaderboardData.filter(
      board => board.id !== id
    );
  },

  removeMemberFromBoard: (state, payload) => {
    const idx = state.leaderboards.findIdx(
      board => board.id === payload.boardId
    );

    state.leaderboards[idx].members = state.leaderboards[idx].members.filter(
      member => member.email !== payload.email
    );
  },

  removeAdminFromBoard: (state, payload) => {
    const idx = state.leaderboards.findIdx(
      board => board.id === payload.boardId
    );

    state.leaderboards[idx].administrators = state.leaderboards[
      idx
    ].administrators.filter(member => member.email !== payload.email);
  },

  updateBoard: (state, board) => {
    const idx = state.leaderboards.findIdx(board => board.id === board.id);
    state.leaderboards[idx] = board;
  }
};

const actions = {};

const getters = {
  getLeaderboardCount: state => state.leaderboards.length,

  getLeaderboards: state => state.leaderboards,

  getLeaderboardData: state => id =>
    state.leaderboardData.find(data => data.leaderboard.id === id),

  getActiveLeaderboard: state => state.activeLeaderboard
};

export default {
  state,
  mutations,
  actions,
  getters
};
