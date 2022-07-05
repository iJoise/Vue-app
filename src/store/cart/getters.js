export default {
  productsDetailed(state, getters, rootState, rootGetters) {
    return state.products.map((pr) => {
      let { title, price } = rootGetters["products/one"](pr.id);

      return {
        ...pr,
        title,
        price,
      };
    });
  },
  totalSum(state, getters) {
    return getters.productsDetailed.reduce((total, pr) => {
      return total + pr.price * pr.cnt;
    }, 0);
  },
  totalCnt: (state) => state.products.length,
  inProccess: (state) => (id) => state.proccessId.includes(id),
  canAdd: (state, getters) => (id) =>
    !getters.inCart(id) && !getters.inProccess(id),
  canUpdate: (state, getters) => (id) =>
    getters.inCart(id) && !getters.inProccess(id),
  inCart: (state, getters) => (id) => getters.index(id) !== -1,
  index: (state) => (id) => state.products.findIndex((pr) => pr.id === id),
  item: (state, getters) => (id) => {
    let ind = getters.index(id);
    return ind === -1 ? null : state.products[ind];
  },
  itemCnt: (state, getters) => (id) => getters.item(id).cnt,
};
