export default {
  namespaced: true,
  state: {
    items: stub(),
  },
  getters: {
    all: (state) => state.items,
    product: (state) => (id) =>
      state.items.find((item) => item.id === Number(id)),
  },
  mutations: {},
  actions: {},
};

function stub() {
  return [
    { id: 100, title: "Ipnone 200", price: 12000, rest: 10 },
    { id: 101, title: "Samsung AAZ8", price: 22000, rest: 5 },
    { id: 103, title: "Nokia 3310", price: 5000, rest: 2 },
    { id: 105, title: "Huawei ZZ", price: 15000, rest: 8 },
  ];
}
