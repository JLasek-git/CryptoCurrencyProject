import { CurrencyDataModel } from "../models/CurrencyDataModel";
import { state } from "@/Global/data/store";
import { ObservedCurrenciesItem } from "@/Global/interfaces/ObservedCurrenciesItem";

const currencies: CurrencyDataModel[] = [
  {
    id: 1,
    name: "Bitcoin",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 2,
    name: "Ethereum",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$838,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 3,
    name: "DogeCoin",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 4,
    name: "ShibaInu",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 5,
    name: "Name",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 6,
    name: "asdasd",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 7,
    name: "Nxsad",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 8,
    name: "xasdsadade",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 9,
    name: "Ngdsgsdfgd",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 10,
    name: "dasd",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 11,
    name: "fasgsdfgd",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 12,
    name: "Ngdsggdffgs",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 13,
    name: "Njghfjfggd",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 14,
    name: "lhjklhfgd",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 15,
    name: "Ngdsgzxczvsd",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 16,
    name: "qweqwed",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 17,
    name: "Nteryeryd",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
];

const tokens: CurrencyDataModel[] = [
  {
    id: 1,
    name: "Token1",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 2,
    name: "Token2",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$838,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 3,
    name: "Token3",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 4,
    name: "Token4",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 5,
    name: "Token5",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 6,
    name: "Token6",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 7,
    name: "Token7",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 8,
    name: "Token8",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
  {
    id: 9,
    name: "Token9",
    price: "$43,185.83",
    day: "0.69%",
    week: "8.10%",
    cap: "$818,338,417,094",
    volume: "$31,973,834,404",
    circulation: "18,921,868 NME",
  },
];
export async function getCurrencies(): Promise<CurrencyDataModel[]> {
  return new Promise((resolve) => {
    resolve(currencies);
  });
}

export async function getTokens(): Promise<CurrencyDataModel[]> {
  return new Promise((resolve) => {
    resolve(tokens);
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
      throw new Error("Currency not found");
    }
  });
}

export async function getCurrencyDetailsByName(
  name: string
): Promise<CurrencyDataModel> {
  return new Promise((resolve) => {
    const foundCurrency = currencies.find((currency) => currency.name === name);
    if (foundCurrency) {
      resolve(foundCurrency);
    } else {
      throw new Error("Currency not found");
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
    const observedCurrency: ObservedCurrenciesItem = {
      id: newFavoriteCurrency.id,
      name: newFavoriteCurrency.name,
      icon: "mdi-bitcoin",
    };
    state.observedCurrencies.push(observedCurrency);

    resolve();
  });
}

export async function removeFavoriteCurrency(id: number): Promise<void> {
  return new Promise((resolve) => {
    console.log(`Currency ${id} deleted from favorite`);
    const filteredFavoriteArray = state.observedCurrencies.filter(
      (currency) => currency.id !== id
    );
    state.observedCurrencies = filteredFavoriteArray;
    resolve();
  });
}
