export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    all: (state) => state.items,
    productById: (state) => (id) => state.items.find((item) => item.id === id),
  },
  mutations: {
    setItems(state, products) {
      state.items = products;
    },
  },
  actions: {
    async load({ commit }) {
      let response = await fetch(
        "http://faceprog.ru/reactcourseapi/products/all.php"
      );
      let products = await response.json();
      commit("setItems", products);
    },
  },
};
