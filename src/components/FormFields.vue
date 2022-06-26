<template>
  <div class="mb-3">
    <label class="mb-1">
      {{ label }}
      <transition name="fade" appear>
        <fa-icon
          v-if="activated"
          :icon="validIcon"
          :class="validClass"
          class="pl-3"
        />
      </transition>
    </label>
    <input
      type="text"
      class="form-control"
      :value="value"
      @input="$emit('updated', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "FormFields",
  props: {
    label: { type: String, required: true },
    activated: { type: Boolean, required: true },
    valid: { type: Boolean, required: true },
    value: { type: String, required: true },
  },
  computed: {
    validIcon() {
      return this.valid ? "circle-check" : "circle-exclamation";
    },
    validClass() {
      return this.valid ? "text-success" : "text-danger";
    },
  },
};
</script>

<style scoped>
.fade-enter-active {
  animation: fadeIn 0.4s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
