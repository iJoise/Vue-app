const BASEURL = "http://faceprog.ru/reactcourseapi/cart/";

export default {
  namespaced: true,
  state: {
    items: [],
    token: null,
  },
  getters: {
    inCart: (state) => (id) => state.items.some((item) => item.id === id),
    length: (state) => state.items.length,
    itemsDetailed: (state, getters, rootState, rootGetters) => {
      return state.items.map((item) => {
        const product = rootGetters["products/productById"](item.id);
        return { ...product, cnt: item.cnt };
      }, []);
    },
    total: (state, getters) => {
      return getters.itemsDetailed.reduce((total, item) => {
        return total + item.price * item.cnt;
      }, 0);
    },
  },
  mutations: {
    load(state, { cart, token }) {
      state.items = cart;
      state.token = token;
    },
    add(state, id) {
      state.items.push({ id, cnt: 1 });
    },
    remove(state, id) {
      state.items = state.items.filter((item) => item.id !== id);
    },
    setCnt(state, payload) {
      const item = state.items.find((item) => item.id === payload.id);
      item.cnt = payload.cnt;
    },
  },
  actions: {
    async load({ commit }) {
      let oldToken = localStorage.getItem("CART__TOKEN");
      let response = await fetch(`${BASEURL}load.php?token=${oldToken}`);
      let { cart, token, needUpdate } = await response.json();

      if (needUpdate) {
        localStorage.setItem("CART__TOKEN", token);
      }

      commit("load", { cart, token });
    },
    async add({ commit, getters, state }, id) {
      if (!getters.inCart(id)) {
        let response = await fetch(
          `${BASEURL}add.php?token=${state.token}&id=${id}`
        );
        let res = await response.json();

        if (res) {
          commit("add", id);
        }
      }
    },
    async remove({ commit, getters, state }, id) {
      if (getters.inCart(id)) {
        let response = await fetch(
          `${BASEURL}remove.php?token=${state.token}&id=${id}`
        );
        let res = await response.json();

        if (res) {
          commit("remove", id);
        }
      }
    },
    async setCnt({ commit, getters, state }, payload) {
      if (getters.inCart(payload.id)) {
        const item = getters.itemsDetailed.find(
          (item) => item.id === payload.id
        );
        const validCnt = Math.min(Math.max(payload.cnt, 1), item.rest);

        let response = await fetch(
          `${BASEURL}change.php?token=${state.token}&id=${payload.id}&cnt=${validCnt}`
        );
        let res = await response.json();

        if (res) {
          commit("setCnt", { ...payload, cnt: validCnt });
        }
      }
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
