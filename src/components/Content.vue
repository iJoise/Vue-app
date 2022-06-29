<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col col-sm-12">
          <app-product></app-product>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppProduct from "./Product";

export default {
  name: "AppContent",
  components: { AppProduct },
};
</script>
