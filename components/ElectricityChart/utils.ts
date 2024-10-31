import {ChartDataItem, ElectricityPrice} from '@/types/types';
import {DateTime} from 'luxon';

export const formatElectricityPriceData = (
  prices: ElectricityPrice[],
  isDarkMode: boolean,
): ChartDataItem[] => {
  const todaysPrices = prices.filter((price) => {
    return DateTime.fromISO(price.startDate).day === DateTime.now().day;
  });

  return todaysPrices
    .sort((a, b) =>
      DateTime.fromISO(a.startDate)
        .diff(DateTime.fromISO(b.startDate))
        .toMillis(),
    )
    .map((price) => {
      const hour = DateTime.fromISO(price.startDate).hour;
      const isCurrentHour = DateTime.now().hour === hour;
      const frontColor = isCurrentHour ? '#00BFFF' : '#177AD5';
      const frontColorDarkMode = isCurrentHour ? '#00E5FF' : '#177AD5';
      return {
        frontColor: isDarkMode ? frontColorDarkMode : frontColor,
        label: String(hour),
        value: price.price,
      };
    });
};
