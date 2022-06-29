<template>
  <div>
    <app-header />
    <app-content />
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppContent from "./components/Content";

export default {
  name: "App",
  components: {
    AppHeader,
    AppContent,
  },
};
</script>
