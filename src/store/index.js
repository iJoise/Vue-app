import { createStore } from "vuex";

import products from "./products";
import cart from "./cart";

export default createStore({
  modules: {
    products,
    cart,
  },
  strict: process.env.NODE_ENV !== "production",
});

/* $store.state.products.all
$store.state.cart.all

$store.getters.all

$store.getters['products/all']
$store.getters['cart/all']

*/
