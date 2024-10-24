import {ChartDataItem, ElectricityPrice} from '@/types/types';

export const formatElectricityPriceData = (
  prices: ElectricityPrice[],
): ChartDataItem[] => {
  const todaysPrices = prices.filter((price) => {
    return new Date(price.startDate).getDay() === new Date().getDay();
  });

  return todaysPrices
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    )
    .map((price) => {
      const hour = new Date(price.startDate).getHours() + 1;
      return {
        // TODO: format to 23:00 etc
        label: hour % 3 ? '' : String(hour),
        value: price.price,
      };
    });
};
