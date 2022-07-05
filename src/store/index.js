import { createStore } from "vuex";

import cart from "./cart";
import products from "./products";
import user from "./user";
import alerts from "./alerts";

import { addErrorHandler } from "@/api/http";

const store = createStore({
  modules: {
    cart,
    products,
    user,
    alerts,
  },
  strict: process.env.NODE_ENV !== "production",
});

addErrorHandler(function (error) {
  let config = error.response.config;

  if ("errorAlert" in config) {
    store.dispatch("alerts/add", {
      text: "Ошибка ответа от сервера " + config.errorAlert,
      timeout: 3000,
    });

    return false;
  }

  return Promise.reject(error);
});

export default store;
