import { createRouter, createWebHistory } from "vue-router";

import ProductsList from "@/views/ProductsList";
import Product from "@/views/Product";
import Cart from "@/views/Cart";
import Checkout from "@/views/Checkout";
import E404 from "@/views/E404";
import OfficeBase from "@/views/office/Base";
// import OfficeIndex from "@/views/office/Index";
// import OfficeOrders from "@/views/office/Orders";

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
    component: E404,
  },
  {
    path: "/office",
    component: OfficeBase,
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

export default router;
