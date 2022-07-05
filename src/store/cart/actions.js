import * as cartApi from "@/api/cart.js";

export default {
  async load({ commit }) {
    let savedToken = localStorage.getItem("cartToken");
    let { token, needUpdate, cart } = await cartApi.load(savedToken);

    if (needUpdate) {
      localStorage.setItem("cartToken", token);
    }

    commit("set", { cart, token });
  },
  async add({ state, getters, commit }, { id }) {
    if (getters.canAdd(id)) {
      commit("startProccess", id);
      let res = await cartApi.add(state.token, id);

      if (res === true) {
        commit("add", { id });
      }

      commit("endProccess", id);
    }
  },
  async remove({ state, getters, commit }, { id }) {
    if (getters.canUpdate(id)) {
      commit("startProccess", id);
      let res = await cartApi.remove(state.token, id);

      if (res === true) {
        commit("remove", { ind: getters.index(id) });
      }

      commit("endProccess", id);
    }
  },
  async setCnt({ state, getters, commit }, { id, cnt }) {
    if (getters.canUpdate(id)) {
      commit("startProccess", id);
      let validCnt = Math.max(1, cnt);
      let res = await cartApi.change(state.token, id, validCnt);

      if (res === true) {
        commit("setCnt", { ind: getters.index(id), cnt: validCnt });
      }

      commit("endProccess", id);
    }
  },
};

/*

async add({ state, getters, commit, dispatch }, { id }){
		if(getters.canAdd(id)){
			commit('startProccess', id);

			try{
				let res = await cartApi.add(state.token, id)

				if(res === true){
					commit('add', { id });
				}
			}
			catch(e){
				dispatch('alerts/add', {
					text: 'Ошибка ответа сервера при добавлении товара'
				}, { root: true });
			}
			finally{
				commit('endProccess', id);
			}
		}
	}

*/
