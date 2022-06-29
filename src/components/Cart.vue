<template>
  <div>
    <div>In Cart: {{ cnt }}</div>
    <div>Total: {{ total }}</div>
    <hr />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartItem",
  computed: {
    ...mapGetters(["cnt", "total"]),
  },
};

/*
		mapGetters(['cnt', 'total'])

		{
			cnt(){
				return this.$store.getters.cnt;
			},
			total(){
				return this.$store.getters.total;
			}
		}

	*/
</script>
