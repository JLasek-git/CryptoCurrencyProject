<template>
  <v-snackbar v-model="isSnackbarVisible" :color="snackbarType">
    <template v-slot:action>
      <v-icon @click="isSnackbarVisible = false">{{
        "mdi-close-thick"
      }}</v-icon>
    </template>
    <slot />
  </v-snackbar>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref } from "@vue/composition-api";

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    snackbarType: {
      type: String,
      validator: (value: string) => {
        return ["success", "error"].includes(value);
      },
      required: true,
    },
  },
  emits: ["input"],
  setup(props, { emit }) {
    const snackbarType = ref(props.snackbarType);
    const isSnackbarVisible = computed({
      get: () => {
        return props.value;
      },
      set: (value) => {
        emit("input", value);
      },
    });
    return {
      snackbarType,
      isSnackbarVisible,
    };
  },
});
</script>
