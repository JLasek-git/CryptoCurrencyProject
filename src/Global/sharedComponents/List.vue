<template>
  <v-list class="main-list">
    <div class="list-legend d-flex justify-space-around align-center">
      <div class="list-item-section">Name</div>
      <div class="list-item-section">Price</div>
      <div class="list-item-section">24h</div>
      <div class="list-item-section">7d</div>
      <div class="list-item-section">Cap</div>
      <div class="list-item-section">Volume</div>
      <div class="list-item-section">Circulation</div>
    </div>
    <v-list-item-group class="list-items-container" v-model="selectedListItem">
      <vuescroll>
        <v-list-item
          class="list-item__wrapper d-flex justify-space-around align-center"
          active-class="item-active"
          v-for="(item, i) in allListItems"
          :key="i"
          :value="item"
        >
          <div class="list-item-section">{{ item.name }}</div>
          <div class="list-item-section">{{ item.price }}</div>
          <div class="list-item-section">{{ item.day }}</div>
          <div class="list-item-section">{{ item.week }}</div>
          <div class="list-item-section">{{ item.cap }}</div>
          <div class="list-item-section">{{ item.volume }}</div>
          <div class="list-item-section">{{ item.circulation }}</div>
        </v-list-item>
      </vuescroll>
    </v-list-item-group>
    <v-list-item class="list-navigation d-flex justify-end align-center">
      Navigation
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api';
import vuescroll from 'vuescroll';

export default defineComponent({
  emits: ['input'],
  props: {
    value: {
      type: Object,
      required: true,
    },
    listItems: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const allListItems = computed(() => props.listItems);
    const selectedListItem = computed({
      get: () => props.value,
      set: (value) => {
        emit('input', value);
      },
    });

    return { allListItems, selectedListItem };
  },
  components: {
    vuescroll,
  },
});
</script>

<style lang="scss" scoped>
.main-list::v-deep {
  width: 100%;
  height: calc(100% - 100px);
  background: $dark-background-gradient;
  border: $base-border;
  border-radius: $base-border-radius;
  color: var(--v-text-base);

  & .list-legend {
    height: 30px;
    font-weight: bold;
    border-bottom: $thick-border;
    padding: 0 $base-padding;
  }

  & .list-item-section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: calc(100% / 7);
    color: var(--v-text-base);
  }
  & .list-items-container {
    height: 85%;
    overflow: auto;

    & .__bar-is-vertical {
      background: var(--v-accent-base) !important;
    }

    & .list-item__wrapper {
      border-bottom: $thick-border;
      height: 90px;
      padding: 0 $base-padding;
    }
  }
}
</style>
