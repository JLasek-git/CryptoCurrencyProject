<template>
  <v-list class="main-list">
    <div class="list-legend d-flex justify-space-around align-center">
      <div class="list-item-section">Favorite</div>
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
          <v-list-item-action class="list-item-section ma-0">
            <v-icon color="text">mdi-star-outline</v-icon>
            <!-- <v-icon color="warning">mdi-star</v-icon> -->
          </v-list-item-action>
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
    <div
      class="list-navigation d-flex justify-end align-center d-flex justify-space-between mt-6"
    >
      <div class="buttons__wrapper">
        <v-btn class="c-button-base mr-4" @click="$emit('showDetails')"
          >Show details</v-btn
        >
        <v-btn
          class="c-button-base--outlined"
          @click="$emit('addToFavorite')"
          v-if="!isDeleteButtonVisible"
          >Favorite selected</v-btn
        >
        <v-btn
          v-else
          class="c-button-delete--outlined"
          @click="$emit('removeFromFavorite')"
        >
          Remove from favorite
        </v-btn>
      </div>
      <PageIndexButtons />
    </div>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref } from '@vue/composition-api';
import PageIndexButtons from '@/Global/sharedComponents/PageIndexButtons.vue';
import vuescroll from 'vuescroll';
import { CurrencyDataModel } from '@/App/models/CurrencyDataModel';

export default defineComponent({
  emits: ['input', 'showDetails', 'addToFavorite', 'removeFromFavorite'],
  props: {
    value: {
      type: Object as PropType<CurrencyDataModel>,
      required: true,
    },
    listItems: {
      type: Array as PropType<CurrencyDataModel[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const allListItems = computed(() => props.listItems);
    const isDeleteButtonVisible = ref(false);
    const selectedListItem = computed({
      get: () => props.value,
      set: (value) => {
        emit('input', value);
      },
    });

    return {
      allListItems,
      selectedListItem,
      isDeleteButtonVisible,
    };
  },
  components: {
    vuescroll,
    PageIndexButtons,
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
    width: calc(100% / 8);
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

  & .list-navigation {
    padding: 0 $base-padding;
  }
}
</style>
