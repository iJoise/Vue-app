<template>
  <div>
    <h1>Cart</h1>
    <hr />
    <div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <td>Title</td>
            <td>Price</td>
            <td>Count</td>
          </tr>
          <tr v-for="product in allProductInCart" :key="product.id">
            <td>{{ product.title }}</td>
            <td>{{ product.price }}</td>
            <td>
              <div class="input-group">
                <button
                  class="btn btn-warning"
                  @click="decrease({ id: product.id, cnt: product.cnt - 1 })"
                >
                  -1
                </button>
                <input
                  :style="{ maxWidth: '50px' }"
                  class="form-control text-center"
                  type="text"
                  :value="product.cnt"
                  @change="setCnt($event, { id: product.id, cnt: product.cnt })"
                />
                <button
                  class="btn btn-success"
                  @click="increase({ id: product.id, cnt: product.cnt + 1 })"
                >
                  +1
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link class="btn btn-success" :to="{ name: 'checkout' }">
      Order now
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "StoreCart",
  computed: {
    ...mapGetters("cart", ["allProductInCart"]),
  },
  methods: {
    ...mapActions("cart", ["increase", "decrease"]),
    async setCnt(e, payload) {
      const lastCnt = payload.cnt;
      this.$store.dispatch("cart/setCnt", { ...payload, cnt: e.target.value });
      if (lastCnt === payload.cnt) this.$forceUpdate();
    },
  },
};
</script>
