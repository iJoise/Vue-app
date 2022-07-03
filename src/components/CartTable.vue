<template>
  <tr>
    <td>{{ product.title }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.cnt }}</td>
    <td>{{ product.price * product.cnt }}</td>
    <td>
      <button
        :disabled="disablesDecrease"
        class="btn btn-warning"
        @click="decrease"
      >
        -1
      </button>
      <button
        :disabled="disabledIncrease"
        class="btn btn-success"
        @click="increase"
      >
        +1
      </button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CartTable",
  props: {
    product: { type: Object, required: true },
  },
  computed: {
    disabledIncrease() {
      return this.product.cnt === this.product.rest;
    },
    disablesDecrease() {
      return this.product.cnt === 1;
    },
  },
  methods: {
    ...mapActions("cart", ["setCnt"]),
    increase() {
      this.$store.dispatch("cart/setCnt", {
        id: this.product.id,
        cnt: this.product.cnt + 1,
      });
    },
    decrease() {
      this.$store.dispatch("cart/setCnt", {
        id: this.product.id,
        cnt: this.product.cnt - 1,
      });
    },
  },
};
</script>
