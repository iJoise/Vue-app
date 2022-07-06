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
    add(state, { text, critical }) {
      state.messages.push({ text, id: ++state.lastAI, critical }); // hw: type, mb time
    },
    remove(state, { id }) {
      state.messages = state.messages.filter((msg) => msg.id !== id);
    },
  },
  actions: {
    add({ state, commit }, { text, timeout, critical }) {
      commit("add", { text, critical });
      const { lastAI } = state;
      if (!critical) {
        setTimeout(() => {
          commit("remove", { id: lastAI });
        }, timeout);
      }
    },
  },
};
