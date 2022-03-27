import { CurrencyDataModel } from "../models/CurrencyDataModel";
import { state } from "@/Global/data/store";
import { ObservedCurrenciesItem } from "@/Global/interfaces/ObservedCurrenciesItem";
import { CurrencyTypeEnum } from "../enums/CurrenciesEnums";

const currencies: CurrencyDataModel[] = [
  {
    id: 1,
    name: "Bitcoin",
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Currencies,
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
    currencyType: CurrencyTypeEnum.Tokens,
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
    currencyType: CurrencyTypeEnum.Tokens,
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
    currencyType: CurrencyTypeEnum.Tokens,
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
    currencyType: CurrencyTypeEnum.Tokens,
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
    currencyType: CurrencyTypeEnum.Tokens,
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
    currencyType: CurrencyTypeEnum.Tokens,
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
    currencyType: CurrencyTypeEnum.Tokens,
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
    currencyType: CurrencyTypeEnum.Tokens,
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
    currencyType: CurrencyTypeEnum.Tokens,
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
  id: number,
  currencyType: CurrencyTypeEnum
): Promise<CurrencyDataModel> {
  return new Promise((resolve) => {
    let foundCurrency;
    if (currencyType === CurrencyTypeEnum.Currencies) {
      foundCurrency = currencies.find((currency) => currency.id === id);
    } else {
      foundCurrency = tokens.find((token) => token.id === id);
    }

    if (foundCurrency) {
      resolve(foundCurrency);
    } else {
      throw new Error("Currency not found");
    }
  });
}

export async function getCurrencyDetailsByName(
  name: string,
  type: CurrencyTypeEnum
): Promise<CurrencyDataModel> {
  return new Promise((resolve) => {
    let foundCurrency;

    if (type === CurrencyTypeEnum.Currencies) {
      foundCurrency = currencies.find((currency) => currency.name === name);
    } else {
      foundCurrency = tokens.find((token) => token.name === name);
    }

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
      name: newFavoriteCurrency.name,
      icon: "mdi-bitcoin",
      type: newFavoriteCurrency.currencyType,
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
