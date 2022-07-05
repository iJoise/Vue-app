<template>
  <div>
    <h1>Products</h1>
    <div class="row">
      <div
        class="col col-sm-4"
        :class="$style.col"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card">
          <div class="card-body">
            <h3>{{ product.title }}</h3>
            <div>{{ product.price }}</div>
            <router-link
              :to="{ name: 'products-item', params: { id: product.id } }"
            >
              Get more
            </router-link>
            <hr />
            <product-controls :id="product.id"></product-controls>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductControls from "@/components/ProductControls";

export default {
  components: {
    ProductControls,
  },
  computed: {
    ...mapGetters("products", { products: "all" }),
  },
};
</script>

<style module>
.col {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
