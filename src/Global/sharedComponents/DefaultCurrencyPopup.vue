<template>
  <v-dialog v-model="isPopupVisible">
    <v-card class="details-window pa-5 mx-auto">
      <v-card-title>{{ popupTitle }}</v-card-title>
      <v-card-text class="details__container">
        <slot />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="c-button-delete--outlined"
          @click="isPopupVisible = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  emits: ["input"],
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: () => "Title",
    },
  },
  setup(props, { emit }) {
    const isPopupVisible = computed({
      get: () => props.value,
      set: (value) => emit("input", value),
    });
    const popupTitle = computed(() => props.title);

    return {
      isPopupVisible,
      popupTitle,
    };
  },
});
</script>

<style lang="scss" scoped>
.v-dialog__content::v-deep {
  & .v-dialog {
    width: 60%;
    min-width: 300px;

    @media (max-width: 600px) {
      width: 100%;
    }

    & .details-window {
      background: var(--v-primary-base) !important;
      border: $base-border;
      border-radius: $base-border-radius !important;
      color: var(--v-text-base) !important;

      & .details__container {
        height: 100%;
        overflow: auto;
      }
    }
  }
}
</style>
