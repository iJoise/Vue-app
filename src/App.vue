<template>
  <div class="container mt-3">
    <form v-if="!formIsSent">
      <progress-bar :current="fieldDone" :max="info.length" />
      <div>
        <div class="form-group" v-for="(field, i) in info" :key="field.label">
          <form-fields
            :label="field.label"
            :activated="field.activated"
            :valid="field.valid"
            :value="field.value"
            @updated="onInput(i, $event)"
          />
        </div>
      </div>
      <button
        :disabled="!formReady"
        @click.prevent="showModal = true"
        class="btn btn-primary"
      >
        Send Data
      </button>
    </form>
    <div v-else>
      <h1>All Done!</h1>
    </div>
    <app-modal
      v-model="showModal"
      @confirm="confirm"
      @cancel="cancel"
      focus-trap
    >
      <template v-slot:title>Check data</template>
      <form-table :info="info" />
    </app-modal>
  </div>
</template>

<script>
import FormFields from "./components/FormFields.vue";
import ProgressBar from "./components/ProgressBar.vue";
import AppModal from "./components/AppModal.vue";
import FormTable from "./components/FormTable.vue";

export default {
  name: "App",
  components: { FormFields, ProgressBar, AppModal, FormTable },
  data: () => ({
    info: [
      {
        label: "Name",
        value: "",
        pattern: /^[a-zA-Z ]{2,30}$/,
      },
      {
        label: "Phone",
        value: "923233223",
        pattern: /^[0-9]{7,14}$/,
      },
      {
        label: "Email",
        value: "asd",
        pattern: /.+/,
      },
      {
        label: "Some Field 1",
        value: "fds",
        pattern: /.+/,
      },
      {
        label: "Some Field 2",
        value: "",
        pattern: /.+/,
      },
    ],
    formIsSent: false,
    showModal: false,
  }),
  computed: {
    fieldDone() {
      return this.info.filter((el) => el.valid).length;
    },
    formReady() {
      return this.fieldDone === this.info.length;
    },
  },
  methods: {
    onInput(i, val) {
      let field = this.info[i];
      field.value = val.trim();
      field.activated = true;
      field.valid = field.pattern.test(field.value);
    },
    formSubmit() {
      if (this.formReady) {
        this.formIsSent = true;
      }
    },
    confirm() {
      this.showModal = false;
      this.formSubmit();
    },
    cancel(close) {
      close();
    },
  },
  created() {
    this.info.forEach((field) => {
      if (field.value) {
        field.valid = true;
        field.activated = true;
      } else {
        field.valid = false;
        field.activated = false;
      }
    });
  },
};
</script>
