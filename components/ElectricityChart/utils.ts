import {ElectricityPrice} from '@/types/types';

export const formatElectricityPriceData = (prices: ElectricityPrice[]) => {
  const todaysPrices = prices.filter((price) => {
    return new Date(price.startDate).getDay() === new Date().getDay();
  });

  return todaysPrices.map((price) => {
    return {hour: new Date(price.startDate).getHours(), price: price.price};
  });
};
