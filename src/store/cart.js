export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    inCart: (state) => (id) => state.items.some((item) => item.id === id),
    length: (state) => state.items.length,
    total: (state, _, rootState, rootGetters) => {
      return state.items.reduce((acc, item) => {
        const product = rootGetters["products/product"](item.id);
        return acc + product.price * item.cnt;
      }, 0);
    },
    allProductInCart: (state, _, rootState, rootGetters) => {
      return state.items.reduce((acc, item) => {
        const product = rootGetters["products/product"](item.id);
        return [...acc, { ...product, cnt: item.cnt }];
      }, []);
    },
  },
  mutations: {
    add(state, id) {
      state.items.push({ id, cnt: 1 });
    },
    remove(state, id) {
      state.items = state.items.filter((item) => item.id !== id);
    },
    setCnt(state, payload) {
      state.items = state.items.map((item) =>
        item.id === payload.id
          ? { ...item, cnt: Math.max(1, payload.cnt) }
          : item
      );
    },
  },
  actions: {
    add({ commit, getters }, id) {
      if (!getters.inCart(id)) {
        commit("add", id);
      }
    },
    remove({ commit, getters }, id) {
      if (getters.inCart(id)) {
        commit("remove", id);
      }
    },
    decrease({ commit }, payload) {
      commit("setCnt", payload);
    },
    increase({ commit }, payload) {
      commit("setCnt", payload);
    },
    setCnt({ commit }, payload) {
      const cnt = parseInt(payload.cnt);
      commit("setCnt", { ...payload, cnt: isNaN(cnt) ? 1 : cnt });
    },
  },
};

/*
	inCart(state){
		return function(id){
			return state.items.some(item => item.id == id);
		}
	}

	inCart: state => id => state.items.some(item => item.id == id)
*/
