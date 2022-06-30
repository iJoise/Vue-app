<template>
  <div v-if="productItem">
    <h1>{{ productItem.title }}</h1>
    <hr />
    <div class="alert alert-success">price {{ productItem.price }}</div>
    <button class="btn btn-outline-success" @click="$router.back()">
      Back to products
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "StoreProduct",
  computed: {
    ...mapGetters("products", ["product"]),
    productItem() {
      return this.product(this.$route.params.id);
    },
  },
  created() {
    if (!this.product(this.$route.params.id)) {
      this.$router.push({ name: "catalog" });
    }
  },
};
</script>
