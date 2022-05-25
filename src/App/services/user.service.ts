import { CurrencyDataModel } from "../models/CurrencyDataModel";

const userObservedItems: CurrencyDataModel[] = [];

export async function getUserObservedItems(): Promise<CurrencyDataModel[]> {
  return new Promise((resolve) => {
    resolve(userObservedItems);
  });
}

export async function addItemToObserved(
  newFavoriteCurrency: CurrencyDataModel
): Promise<void> {
  return new Promise((resolve) => {
    userObservedItems.push(newFavoriteCurrency);
    resolve();
  });
}

export async function removeItemFromObserved(id: string): Promise<void> {
  return new Promise((resolve) => {
    const filteredFavoriteArray = userObservedItems.filter(
      (currency) => currency.id !== id
    );
    userObservedItems.splice(0, userObservedItems.length);
    userObservedItems.push(...filteredFavoriteArray);
    resolve();
  });
}
