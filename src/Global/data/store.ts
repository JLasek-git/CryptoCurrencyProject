import { reactive } from '@vue/composition-api';
import { ObservedCurrenciesItem } from '../interfaces/ObservedCurrenciesItem';

interface State {
  observedCurrencies: ObservedCurrenciesItem[];
}

export const state = reactive<State>({
  observedCurrencies: [],
});
