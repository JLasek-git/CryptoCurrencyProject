import { CurrencyDataModel } from '../models/CurrencyDataModel';
const currencies: CurrencyDataModel[] = [
  {
    id: 1,
    name: 'Name',
    price: '$43,185.83',
    day: '0.69%',
    week: '8.10%',
    cap: '$818,338,417,094',
    volume: '$31,973,834,404',
    circulation: '18,921,868 NME',
  },
  {
    id: 2,
    name: 'Name',
    price: '$43,185.83',
    day: '0.69%',
    week: '8.10%',
    cap: '$838,338,417,094',
    volume: '$31,973,834,404',
    circulation: '18,921,868 NME',
  },
  {
    id: 3,
    name: 'Name',
    price: '$43,185.83',
    day: '0.69%',
    week: '8.10%',
    cap: '$818,338,417,094',
    volume: '$31,973,834,404',
    circulation: '18,921,868 NME',
  },
  {
    id: 4,
    name: 'Name',
    price: '$43,185.83',
    day: '0.69%',
    week: '8.10%',
    cap: '$818,338,417,094',
    volume: '$31,973,834,404',
    circulation: '18,921,868 NME',
  },
  {
    id: 5,
    name: 'Name',
    price: '$43,185.83',
    day: '0.69%',
    week: '8.10%',
    cap: '$818,338,417,094',
    volume: '$31,973,834,404',
    circulation: '18,921,868 NME',
  },
  {
    id: 6,
    name: 'Name',
    price: '$43,185.83',
    day: '0.69%',
    week: '8.10%',
    cap: '$818,338,417,094',
    volume: '$31,973,834,404',
    circulation: '18,921,868 NME',
  },
  {
    id: 7,
    name: 'Name',
    price: '$43,185.83',
    day: '0.69%',
    week: '8.10%',
    cap: '$818,338,417,094',
    volume: '$31,973,834,404',
    circulation: '18,921,868 NME',
  },
  {
    id: 8,
    name: 'Name',
    price: '$43,185.83',
    day: '0.69%',
    week: '8.10%',
    cap: '$818,338,417,094',
    volume: '$31,973,834,404',
    circulation: '18,921,868 NME',
  },
  {
    id: 9,
    name: 'Name',
    price: '$43,185.83',
    day: '0.69%',
    week: '8.10%',
    cap: '$818,338,417,094',
    volume: '$31,973,834,404',
    circulation: '18,921,868 NME',
  },
];
export async function getCurrencies(): Promise<CurrencyDataModel[]> {
  return new Promise((resolve) => {
    resolve(currencies);
  });
}

export async function getCurrencyDetails(
  id: number
): Promise<CurrencyDataModel> {
  return new Promise((resolve) => {
    const foundCurrency = currencies.find((currency) => currency.id === id);
    if (foundCurrency) {
      resolve(foundCurrency);
    } else {
      throw new Error('Currency not found');
    }
  });
}

export async function addCurrencyToFavorite(
  newFavoriteCurrency: CurrencyDataModel
): Promise<void> {
  return new Promise((resolve) => {
    console.log(
      `Currency ${JSON.stringify(newFavoriteCurrency)} added to favorites`
    );
    resolve();
  });
}

export async function removeFavoriteCurrency(id: number): Promise<void> {
  return new Promise((resolve) => {
    console.log(`Currency ${id} deleted from favorite`);
    resolve();
  });
}
