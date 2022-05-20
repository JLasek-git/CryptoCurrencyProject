import { ObservedCurrenciesItem } from '../interfaces/ObservedCurrenciesItem';
import { state } from '@/Global/data/store';
export async function getObservedCurrencies(): Promise<
  ObservedCurrenciesItem[]
> {
  return new Promise((resolve) => {
    resolve(state.observedCurrencies);
  });
}
