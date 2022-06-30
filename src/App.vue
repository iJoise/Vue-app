<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-9">
            <h1>Site</h1>
          </div>
          <div class="col col-sm-3">
            <div class="alert alert-default">
              <div>In Cart: {{ length }}</div>
              <div>Total: {{ total }}</div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-3 menu">
            <ul class="list-group">
              <li
                class="list-group-item"
                v-for="item in menu"
                :key="item.route"
              >
                <router-link
                  :to="{ name: item.route }"
                  exact-active-class="text-danger"
                >
                  {{ item.text }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col col-sm-9">
            <router-view />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    menu: [
      { route: "catalog", text: "Products" },
      { route: "cart", text: "Cart" },
      { route: "checkout", text: "Order" },
    ],
  }),
  computed: {
    ...mapGetters("cart", ["total", "length"]),
  },
  // $route, $router
};
</script>

<style>
.menu {
  border-right: 1px solid #ddd;
}

.list-group-item {
  transition: background 0.3s, color 0.3s;
}

.list-group-item a {
  text-decoration: none;
}

.list-group-item.active a {
  color: inherit;
}
</style>
