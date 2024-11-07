import {FC} from 'react';
import {View} from 'react-native';
import {InfoBox} from '@/src/components/InfoBox/InfoBox';
import useElectricityPrices from '@/src/hooks/useElectricityPrices';
import getPriceNow, {
  getAverageDailyElectricityPrice,
} from '@/src/components/InfoBoxArea/utils';

export const InfoBoxArea: FC = () => {
  const {data: pricesData} = useElectricityPrices();

  if (!pricesData) {
    return null;
  }

  const priceNow = getPriceNow(pricesData);
  const dailyAveragePrice = getAverageDailyElectricityPrice(pricesData);

  return (
    <View>
      <InfoBox priceText={priceNow.toFixed(2)} bottomText="Price now" />
      <InfoBox
        priceText={dailyAveragePrice.toFixed(2)}
        bottomText="Daily Average Price"
      />
    </View>
  );
};
