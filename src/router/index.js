import { createRouter, createWebHistory } from "vue-router";

import AppProductsList from "@/pages/ProductsList";
import AppProduct from "@/components/Product";
import AppCart from "@/pages/Cart";
import FormOrder from "@/pages/FormOrder";
import AppE404 from "@/components/E404";

const routes = [
  {
    name: "catalog",
    path: "/",
    component: AppProductsList,
  },
  {
    name: "cart",
    path: "/cart",
    component: AppCart,
  },
  {
    name: "checkout",
    path: "/order",
    component: FormOrder,
  },
  {
    name: "product",
    path: "/product/:id",
    component: AppProduct,
  },
  {
    path: "/:any(.*)", // .*
    component: AppE404,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
