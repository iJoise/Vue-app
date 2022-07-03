<template>
  <div>
    <h1>Cart</h1>
    <hr />
    <div>
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Count</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-if="!loading">
          <CartTable
            v-for="product in itemsDetailed"
            :key="product.id"
            :product="product"
          />
        </tbody>
      </table>
    </div>
    <router-link class="btn btn-success" :to="{ name: 'checkout' }">
      Order now
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartTable from "../components/CartTable";

export default {
  name: "StoreCart",
  data() {
    return {
      loading: false,
    };
  },
  components: {
    CartTable,
  },
  computed: {
    ...mapGetters("cart", ["itemsDetailed"]),
  },
  created() {
    this.loading = true;

    this.$store.dispatch("cart/load");

    this.loading = false;
  },
};
</script>
