<template>
  <div class="row">
    <div class="col col-3">
      <ul class="list-group">
        <li>
          <router-link class="list-group-item" :to="{ name: 'office' }">
            <a>Main screen</a>
          </router-link>
        </li>
        <li>
          <router-link class="list-group-item" :to="{ name: 'office-orders' }">
            <a>Orders history</a>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="col col-9">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfficeBase",
};
</script>

<style>
.list-group li {
  list-style: none;
}
a.router-link-exact-active {
  color: red !important;
}
</style>
