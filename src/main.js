import { createApp } from "vue";
import App from "./App";
import store from "./store";
import router from "./router";

createApp(App).use(store).use(router).mount("#app");

import "bootstrap/dist/css/bootstrap.min.css";
