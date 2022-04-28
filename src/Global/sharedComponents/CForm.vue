<template>
  <div>
    <v-form ref="vForm">
      <slot></slot>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const vForm = ref();

    const validateForm = (): boolean => {
      return vForm.value?.validate();
    };

    const resetValidation = (): void => {
      vForm.value?.resetValidation();
    };

    const resetForm = (): void => {
      vForm.value?.resetForm();
    };

    return { vForm, validateForm, resetValidation, resetForm };
  },
});
</script>

<style lang="scss" scoped>
.v-form {
  height: 100%;
  width: 100%;
}
</style>
