import { createApp } from "vue";
import App from "./App";
import store from "./store";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCircleCheck, faCircleExclamation, faXmark);

store.dispatch("products/load").then(() => {
  createApp(App)
    .use(store)
    .use(router)
    .component("fa-icon", FontAwesomeIcon)
    .mount("#app");
});

import "bootstrap/dist/css/bootstrap.min.css";
