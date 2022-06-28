<template>
  <vue-final-modal
    v-slot="{ params, close }"
    v-bind="$attrs"
    classes="modal-container"
    content-class="modal-content"
  >
    <span class="modal__title">
      <slot name="title"></slot>
    </span>
    <div class="modal__content">
      <slot :params="params"></slot>
    </div>
    <div class="modal__action">
      <button class="btn btn-success me-5" @click="$emit('confirm', close)">
        confirm
      </button>
      <button class="btn btn-danger" @click="$emit('cancel', close)">
        cancel
      </button>
    </div>
    <button class="modal__close btn btn-light" @click="close">
      <fa-icon icon="fa-solid fa-xmark" class="pl-3" />
    </button>
  </vue-final-modal>
</template>

<script>
import { VueFinalModal } from "vue-final-modal";
export default {
  components: {
    VueFinalModal,
  },
  inheritAttrs: false,
  emits: ["confirm", "cancel"],
};
</script>

<style scoped>
::v-deep(.modal-container) {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep(.modal-content) {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
  max-width: 50%;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>
