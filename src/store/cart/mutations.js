export default {
  set(state, { cart, token }) {
    state.products = cart;
    state.token = token;
  },
  add(state, { id }) {
    state.products.push({ id, cnt: 1 });
  },
  remove(state, { ind }) {
    state.products.splice(ind, 1);
  },
  setCnt(state, { ind, cnt }) {
    state.products[ind].cnt = cnt;
  },
  startProccess(state, id) {
    state.proccessId.push(id);
  },
  endProccess(state, rid) {
    state.proccessId = state.proccessId.filter((id) => id !== rid);
  },
};
