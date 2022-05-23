<template>
  <div class="default-popup__wrapper d-flex justify-space-between align-center">
    <div
      v-if="observedCurrencies.length > 0"
      class="navbar d-flex justify-center"
    >
      <div class="nav-icons__container d-flex flex-column my-5">
        <v-icon
          v-for="(currency, index) in observedCurrencies"
          :key="index"
          class="text--text observed-currency-icon mb-4"
          @click="changeSelectedCurrency(currency, $event)"
        >
          {{ currency.icon }}
        </v-icon>
      </div>
    </div>
    <div class="details-window mr-16 d-flex flex-column">
      <div class="details__container pa-10">
        <slot />
      </div>
      <div class="buttons__wrapper d-flex justify-end ma-5">
        <v-btn
          class="c-button-delete--outlined"
          @click="$emit('closeButtonClicked')"
        >
          Close
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, PropType } from "@vue/composition-api";
import { ObservedCurrenciesItem } from "@/Global/interfaces/ObservedCurrenciesItem";
import { getObservedCurrencies } from "../services/global.service";
import { CurrencyDataModel } from "@/App/models/CurrencyDataModel";
import { getCurrencyDetailsByName } from "@/App/services/currencies.service";
import { state } from "@/Global/data/store";

export default defineComponent({
  emits: ["closeButtonClicked", "input"],
  props: {
    value: {
      type: Object as PropType<CurrencyDataModel>,
      default: () => new CurrencyDataModel(),
    },
  },
  setup(props, { emit }) {
    const observedCurrencies = ref<ObservedCurrenciesItem[]>([]);
    const currencyDetails = computed({
      get: () => props.value,
      set: (value) => emit("input", value),
    });

    getObservedCurrencies().then((response) => {
      observedCurrencies.value = response;
    });

    async function changeSelectedCurrency(
      currency: ObservedCurrenciesItem,
      event: {
        target: { classList: { add: (arg0: string) => void } };
      }
    ): Promise<void> {
      const activeIcon = document.querySelector(
        ".observed-currency-icon.active"
      );
      activeIcon?.classList.remove("active");
      event.target.classList.add("active");
      currencyDetails.value = await getCurrencyDetailsByName(
        currency.name,
        currency.type
      );
    }

    return {
      observedCurrencies,
      changeSelectedCurrency,
    };
  },
});
</script>

<style lang="scss" scoped>
.default-popup__wrapper {
  position: absolute;
  inset: 0 0;
  background: rgba(0, 0, 0, 0.4);
  color: var(--v-text-base);
  z-index: 20;

  & .navbar {
    width: 60px;
    background: var(--v-primary-base);
    height: 100%;

    & .nav-icons__container {
      height: 100%;
      & .observed-currency-icon {
        cursor: pointer;
        font-size: $details-icon-font-size;

        &.active {
          color: var(--v-accent-base) !important;
        }

        &:hover {
          color: var(--v-accent-base) !important;
        }
      }

      @media (max-width: $mobile-width-breakpoint) {
        width: 100%;
        margin: 0 !important;
        flex-direction: row !important;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        padding: 0 $small-padding;

        & .v-icon {
          margin: 0 !important;
        }
      }
    }

    @media (max-width: $mobile-width-breakpoint) {
      position: absolute;
      top: 0;
      height: 60px;
      width: 100%;
    }
  }

  & .details-window {
    background: var(--v-primary-base);
    width: 90%;
    height: 80%;
    border: $base-border;
    border-radius: $base-border-radius;

    @media (max-width: $mobile-width-breakpoint) {
      width: 100%;
      margin: 0 $small-margin !important;
    }

    & .details__container {
      height: 100%;
      overflow: auto;
    }
  }
}
</style>
