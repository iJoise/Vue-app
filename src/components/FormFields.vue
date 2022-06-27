<template>
  <div class="mb-3">
    <label class="mb-1">
      {{ label }}
      <transition
        v-if="activated"
        name="icon"
        mode="out-in"
        appear
        appear-active-class="icon-appear"
      >
        <fa-icon
          :key="valid"
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
.icon-enter-active {
  animation: iconIn 0.2s;
}

.icon-leave-active {
  animation: iconOut 0.2s;
}

.icon-appear {
  animation: fadeIn 0.3s;
}

@keyframes iconIn {
  from {
    transform: rotateY(-90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

@keyframes iconOut {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
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
