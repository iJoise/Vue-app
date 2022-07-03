<template>
  <div v-if="hasProduct">
    <h1>{{ product.title }}</h1>
    <hr />
    <div class="alert alert-success">price {{ product.price }}</div>
  </div>
  <not-found v-else />
  <button class="btn btn-outline-success" @click="$router.back()">
    Back to products
  </button>
</template>

<script>
import { mapGetters } from "vuex";
import NotFound from "./E404";
export default {
  name: "StoreProduct",
  components: {
    NotFound,
  },
  computed: {
    ...mapGetters("products", ["productById"]),
    id() {
      return parseInt(this.$route.params.id);
    },
    validId() {
      return /^[1-9]+\d*$/.test(this.id);
    },
    product() {
      return this.productById(this.id);
    },
    hasProduct() {
      return this.validId && this.product !== undefined;
    },
  },
};
</script>
