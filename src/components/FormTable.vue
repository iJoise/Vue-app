<template>
  <table class="table table-bordered">
    <tbody>
      <tr v-for="item in info" :key="item.label">
        <td>{{ item.label }}</td>
        <td>{{ item.value }}</td>
      </tr>
      <tr>
        <td>Card</td>
        <td>
          <table class="table table-info mb-0">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in itemsDetailed" :key="product.id">
                <td>{{ product.title }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.cnt }}</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FormTable",
  props: {
    info: { type: Array, required: true },
  },
  computed: {
    ...mapGetters("cart", ["itemsDetailed"]),
  },
};
</script>
