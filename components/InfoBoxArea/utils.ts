import {ElectricityPrice} from '@/types/types';

export function getAverageDailyElectricityPrice(prices: ElectricityPrice[]) {
  return (
    prices.reduce((accumulator, currentValue) => {
      const isTodayPrice =
        new Date(currentValue.endDate).getDay() === new Date().getDay();
      return isTodayPrice ? accumulator + currentValue.price : accumulator;
    }, 0) / 24
  );
}

export default function getPriceNow(prices: ElectricityPrice[]) {
  const priceNow = prices.find((price) => {
    return new Date(price.startDate).getHours() === new Date().getHours();
  });
  return priceNow ? priceNow.price : 0;
}
