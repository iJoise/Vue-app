export default {
  namespaced: true,
  state: {
    messages: [],
    lastAI: 0,
  },
  getters: {
    all: (state) => state.messages,
  },
  mutations: {
    add(state, { text }) {
      state.messages.push({ text, id: ++state.lastAI }); // hw: type, mb time
    },
    remove(state, id) {
      state.messages = state.messages.filter((msg) => msg.id !== id);
    },
  },
  actions: {
    add({ state, commit }, { text, timeout }) {
      commit("add", { text });
      const { lastAI } = state;

      setTimeout(() => {
        commit("remove", lastAI);
      }, timeout);
    },
  },
};
