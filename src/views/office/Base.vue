<template>
  <div class="row">
    <div class="col col-3">
      <ul class="list-group">
        <!--        eslint-disable-->
        <router-link tag="li" class="list-group-item" :to="{ name: 'office' }">
          <a>Main screen</a>
        </router-link>
        <router-link
          tag="li"
          class="list-group-item"
          :to="{ name: 'office-orders' }"
        >
          <a>Orders history</a>
        </router-link>
      </ul>
    </div>
    <div class="col col-9"></div>
  </div>
</template>

<script>
export default {
  name: "OfficeBase",
};
</script>
