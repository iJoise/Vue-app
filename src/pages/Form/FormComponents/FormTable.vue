<template>
  <table class="table table-bordered">
    <tbody>
      <tr v-for="item in info" :key="item.label">
        <td>{{ item.label }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "FormTable",
  props: {
    info: { type: Array, required: true },
  },
};
</script>
