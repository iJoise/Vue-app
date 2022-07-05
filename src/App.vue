<template>
  <div id="app" class="grid-box">
    <header class="mt-3">
      <div class="container">
        <app-alert />
        <div class="row justify-content-between">
          <div class="col flex-norm">
            <div class="h3">Sample site</div>
            <div class="">About some and other products</div>
          </div>
          <div class="col flex-norm">
            <div>In Cart: {{ cartCount }}</div>
            <div>Total: {{ cartTotal }}</div>
          </div>
        </div>
        <hr />
        <nav class="navbar navbar-expand p-0">
          <ul class="navbar-nav">
            <li v-for="item in menuItems" :key="item.route" class="nav-item">
              <router-link
                :to="{ name: item.route }"
                class="nav-link"
                active-class="active"
                :exact="item.exact"
                >{{ item.title }}</router-link
              >
            </li>
          </ul>
        </nav>
        <hr />
      </div>
    </header>
    <section>
      <div class="container">
        <router-view v-slot="{ Component }">
          <transition name="slide" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </section>
    <footer class="mb-3">
      <div class="container">
        <hr />
        <div>&copy; Rights not found</div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppAlert from "@/components/Alert";

export default {
  components: {
    AppAlert,
  },
  data() {
    return {
      menuItems: [
        { route: "products", title: "Products", exact: true },
        { route: "cart", title: "Cart", exact: true },
        { route: "checkout", title: "Checkout", exact: true },
        /* { route: 'office', title: 'Office', exact: false } */
      ],
    };
  },
  computed: {
    ...mapGetters("cart", { cartCount: "totalCnt", cartTotal: "totalSum" }),
  },
};
</script>

<style>
.grid-box {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.flex-norm {
  flex: 0 1 auto !important;
  width: auto !important;
}

a.active {
  color: red !important;
}

.slide-enter-active {
  animation: slideIn 0.3s;
}

.slide-leave-active {
  animation: slideOut 0.3s;
}

@keyframes slideIn {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

@keyframes slideOut {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
</style>
