import {ElectricityPrice} from '@/types/types';
import {DateTime} from 'luxon';

export function getAverageDailyElectricityPrice(prices: ElectricityPrice[]) {
  return (
    prices.reduce((accumulator, currentValue) => {
      const isTodayPrice =
        DateTime.fromISO(currentValue.endDate).day === DateTime.now().day;
      return isTodayPrice ? accumulator + currentValue.price : accumulator;
    }, 0) / 24
  );
}

export default function getPriceNow(prices: ElectricityPrice[]) {
  const priceNow = prices.find((price) => {
    const priceDate = DateTime.fromISO(price.startDate);
    const todayDate = DateTime.now();

    return (
      priceDate.hasSame(todayDate, 'day') &&
      priceDate.hasSame(todayDate, 'hour')
    );
  });

  return priceNow ? priceNow.price : 0;
}
