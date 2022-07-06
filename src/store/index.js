import { createStore } from "vuex";

import cart from "./cart";
import products from "./products";
import user from "./user";
import alerts from "./alerts";

import { addResponseHandler } from "@/api/http";

const store = createStore({
  modules: {
    cart,
    products,
    user,
    alerts,
  },
  strict: process.env.NODE_ENV !== "production",
});

addResponseHandler(
  function (response) {
    if ("errorAlert" in response.config) {
      response.data = { res: true, data: response.data };
    }

    return response;
  },
  function (error) {
    let config = error.response.config;

    if ("errorAlert" in config) {
      let { errorAlert } = config;

      if (typeof errorAlert === "string") {
        errorAlert = { text: errorAlert };
      }

      store.dispatch("alerts/add", {
        text: "Ошибка ответа от сервера " + errorAlert.text,
        timeout: errorAlert.timeout ?? 3000,
        critical: errorAlert.critical ?? false,
      });

      return { data: { res: false, data: null } };
    }

    return Promise.reject(error);
  }
);

export default store;
