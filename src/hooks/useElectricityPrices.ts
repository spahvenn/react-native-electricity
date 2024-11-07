import {useQuery, UseQueryResult} from '@tanstack/react-query';
import Axios from 'axios';
import {ElectricityPrice} from '@/src/types/types';

const PRICE_ENDPOINT = 'https://api.porssisahko.net/v1/latest-prices.json';

type ElectricityPricesResponse = {
  prices: ElectricityPrice[];
};
export default function useElectricityPrices(): UseQueryResult<
  ElectricityPrice[]
> {
  return useQuery({
    queryKey: ['electricityPrices'],
    queryFn: async () => {
      const res = await Axios.get<ElectricityPricesResponse>(PRICE_ENDPOINT);
      return res.data.prices;
    },
  });
}
