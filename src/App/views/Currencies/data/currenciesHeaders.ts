import { DataTableHeader } from "vuetify";

export const currenciesHeaders: DataTableHeader[] = [
  {
    text: "Name",
    value: "name",
    sortable: true,
  },
  {
    text: "Price",
    value: "price",
    sortable: true,
  },
  {
    text: "24h",
    value: "day",
    sortable: true,
  },
  {
    text: "7d",
    value: "week",
    sortable: true,
  },
  {
    text: "Cap",
    value: "cap",
    sortable: true,
  },
  {
    text: "Volume",
    value: "volume",
    sortable: true,
  },
  {
    text: "Circulation",
    value: "circulation",
    sortable: true,
  },
  {
    text: "Actions",
    value: "actions",
    sortable: false,
  },
];
