import { createStore } from "vuex";
import { ORDER_STATUSES } from "./constants/index";

export default createStore({
  state: {
    price: 1000,
    cnt: 1,
    orderStatus: 0,
  },
  getters: {
    price: (state) => state.price,
    cnt: (state) => state.cnt,
    total: (state) => state.price * state.cnt,
    orderIsNothing: (state) => state.orderStatus === ORDER_STATUSES.new, // wtf my english
    orderIsPending: (state) => state.orderStatus === ORDER_STATUSES.pending,
    orderIsDone: (state) => state.orderStatus === ORDER_STATUSES.done,
  },
  mutations: {
    setCnt(state, value) {
      state.cnt = Math.max(1, value);
    },
    setOrderStatus(state, status) {
      state.orderStatus = status;
    },
  },
  actions: {
    sendOrder(store) {
      store.commit("setOrderStatus", ORDER_STATUSES.pending);

      setTimeout(() => {
        store.commit("setOrderStatus", ORDER_STATUSES.done);
      }, 500);
    },
    decrease({ state, commit }) {
      commit("setCnt", state.cnt - 1);
    },
    increase({ state, commit }) {
      commit("setCnt", state.cnt + 1);
    },
    setCnt({ commit }, value) {
      const cnt = parseInt(value);
      commit("setCnt", isNaN(cnt) ? 1 : cnt);
    },
  },
  strict: process.env.NODE_ENV !== "production",
});

/*
	class VuexParody{
		state = {}
		mutations = {}

		commit(name){
			let fn = this.mutations[name]
			fn(this.state);
		}
	}

*/
