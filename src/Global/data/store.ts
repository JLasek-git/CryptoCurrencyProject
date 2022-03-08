import { reactive } from '@vue/composition-api';
import { CurrencyDataModel } from '@/App/models/CurrencyDataModel';

interface State {
  observedCurrencies: CurrencyDataModel[];
}

export const state = reactive<State>({
  observedCurrencies: [],
});
