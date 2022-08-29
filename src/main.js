import { createApp } from "vue";
import App from "./App.vue";

import store from "./store";
import router from "./router";

let app = createApp(App).use(store).use(router);

store.dispatch("user/autoLogin");
store.dispatch("cart/load");
store.dispatch("products/load").then(() => {
  app.mount("#app");
});

import "bootstrap/dist/css/bootstrap.css";
