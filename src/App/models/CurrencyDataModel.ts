export class CurrencyDataModel {
  id = "";
  beta_value = 0;
  circulating_supply = 0;
  first_data_at = "";
  last_updated = "";
  max_supply = 0;
  name = "";
  rank = 0;
  symbol = "";
  total_supply = 0;
  quotes = {
    USD: {
      price: 0,
      volume_24h: 0,
      volume_24h_change_24h: 0,
      ath_date: "",
      ath_price: 0,
      market_cap: 0,
      market_cap_change_24h: 0,
      percent_change_12h: 0,
      percent_change_15m: 0,
      percent_change_1h: 0,
      percent_change_1y: 0,
      percent_change_24h: 0,
      percent_change_30d: 0,
      percent_change_30m: 0,
      percent_change_6h: 0,
      percent_change_7d: 0,
      percent_from_price_ath: 0,
    },
  };
  isObserved? = false;
}
