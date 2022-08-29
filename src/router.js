import { createRouter, createWebHistory } from "vue-router";

import store from "@/store";

import ProductsList from "@/views/ProductsList";
import Product from "@/views/Product";
import Cart from "@/views/Cart";
import Checkout from "@/views/Checkout";
import E404 from "@/views/E404";
import Login from "@/views/Login";
import OfficeBase from "@/views/office/Base";
import OfficeIndex from "@/views/office/Index";
import OfficeOrders from "@/views/office/Orders";

let routes = [
  {
    name: "products",
    path: "/",
    component: ProductsList,
  },
  {
    name: "products-item",
    path: "/products/:id",
    component: Product,
  },
  {
    name: "cart",
    path: "/cart",
    component: Cart,
  },
  {
    name: "checkout",
    path: "/order",
    component: Checkout,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
    beforeEnter(from, to, next) {
      store.getters["user/isLogin"] ? next({ name: "office" }) : next();
    },
  },
  {
    path: "/office",
    component: OfficeBase,
    meta: { auth: true },
    children: [
      {
        path: "",
        component: OfficeIndex,
        name: "office",
      },
      {
        path: "orders",
        component: OfficeOrders,
        name: "office-orders",
      },
    ],
  },
  {
    path: "/:any(.*)",
    component: E404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters["user/isLogin"]) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
