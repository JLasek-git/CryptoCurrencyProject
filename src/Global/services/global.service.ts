import { ObservedCurrenciesItem } from '../interfaces/ObservedCurrenciesItem';
export async function getObservedCurrencies(): Promise<
  ObservedCurrenciesItem[]
> {
  const observedCurrencies: ObservedCurrenciesItem[] = [
    {
      name: 'Bit Coin',
      icon: 'mdi-bitcoin',
    },
    {
      name: 'Ethereum',
      icon: 'mdi-ethereum',
    },
    {
      name: 'USD Coin',
      icon: 'mdi-currency-usd',
    },
  ];

  return new Promise((resolve) => {
    resolve(observedCurrencies);
  });
}
