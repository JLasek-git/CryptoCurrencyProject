import { DataTableHeader } from "vuetify";

export const currenciesHeaders: DataTableHeader[] = [
  {
    text: "Name",
    value: "name",
    sortable: true,
  },
  {
    text: "Price($)",
    value: "quotes.USD.price",
    sortable: true,
  },
  {
    text: "24h(%)",
    value: "quotes.USD.percent_change_24h",
    sortable: true,
  },
  {
    text: "7d(%)",
    value: "quotes.USD.percent_change_7d",
    sortable: true,
  },
  {
    text: "Cap($)",
    value: "quotes.USD.market_cap",
    sortable: true,
  },
  {
    text: "Volume($)",
    value: "quotes.USD.volume_24h",
    sortable: true,
  },
  {
    text: "Circulating Supply",
    value: "circulating_supply",
    sortable: true,
  },
  {
    text: "Observation",
    value: "actions",
    sortable: false,
  },
];
