<template>
  <div>
    <h2>Product title</h2>
    <div class="price">{{ price }}</div>
    <hr />
    <button class="btn btn-warning" @click="decrease">-1</button>
    <input type="text" :value="cnt" @change="setCnt" />
    <button class="btn btn-success" @click="increase">+1</button>
    <hr />
    <button class="btn btn-primary mb-3" @click="sendOrder">Send</button>
    <div class="alert alert-warning" v-if="orderIsPending">Pending...</div>
    <div class="alert alert-success" v-else-if="orderIsDone">Done!</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AppProduct",
  computed: mapGetters(["price", "cnt", "orderIsPending", "orderIsDone"]),
  methods: {
    ...mapActions(["increase", "decrease", "sendOrder"]),
    async setCnt(e) {
      const lastCnt = this.cnt;
      this.$store.dispatch("setCnt", e.target.value);
      if (lastCnt === this.cnt) this.$forceUpdate();
    },
  },
};
</script>
