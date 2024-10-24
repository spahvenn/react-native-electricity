import {CartesianChart, Line} from 'victory-native';
import {useFont} from '@shopify/react-native-skia';
import inter from '../../assets/fonts/SpaceMono-Regular.ttf';
import {View} from 'react-native';
import useElectricityPrices from '@/components/ElectricityChart/hooks/useElectricityPrices';
import {formatElectricityPriceData} from '@/components/ElectricityChart/utils';

const FinnishElectricityChart = () => {
  const font = useFont(inter, 12);

  const prices = useElectricityPrices();

  if (!prices.data) {
    return null;
  }

  const electricityPriceData = formatElectricityPriceData(prices.data);

  return (
    <View style={{height: 300}}>
      <CartesianChart
        data={electricityPriceData}
        xKey="hour"
        yKeys={['price']}
        axisOptions={{font}}
      >
        {({points}) => (
          <Line points={points.price} color="red" strokeWidth={3} />
        )}
      </CartesianChart>
    </View>
  );
};

export default FinnishElectricityChart;
