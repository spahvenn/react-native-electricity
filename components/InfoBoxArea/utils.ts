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
    const priceDate = new Date(price.startDate);
    const todayDate = new Date();
    return (
      priceDate.getHours() === todayDate.getHours() &&
      priceDate.getDay() === todayDate.getDay()
    );
  });
  return priceNow ? priceNow.price : 0;
}
