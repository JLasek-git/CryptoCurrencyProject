<template>
  <div class="buttons__wrapper d-flex justify-end">
    <v-btn
      :disabled="isShowDetailsBtnDisabled"
      class="c-button-base mx-3"
      elevation="0"
      @click="$emit('showDetailsClicked')"
    >
      Show details
    </v-btn>
    <v-btn
      v-if="observeButtonVisible"
      :disabled="isObserveDisabled"
      class="c-button-base--outlined"
      elevation="0"
      @click="$emit('observeClicked')"
    >
      Observe
    </v-btn>
    <v-btn
      v-if="deleteBtnVisible"
      class="c-button-delete"
      elevation="0"
      @click="$emit('deleteClicked')"
    >
      Delete
    </v-btn>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  emits: ["showDetailsClicked", "observeClicked", "deleteClicked"],
  props: {
    isShowDetailsBtnDisabled: {
      type: Boolean,
      default: true,
    },
    isObserveBtnDisabled: {
      type: Boolean,
      default: true,
    },
    observeButtonVisible: {
      type: Boolean,
      default: false,
    },
    deleteBtnVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isShowDetailsDisabled = computed(
      () => props.isShowDetailsBtnDisabled
    );
    const isObserveDisabled = computed(() => props.isObserveBtnDisabled);

    return { isShowDetailsDisabled, isObserveDisabled };
  },
});
</script>

<style lang="scss" scoped>
.buttons__wrapper {
  min-height: 100%;
  width: 100%;
}
</style>
