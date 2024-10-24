import {CartesianChart, Line, useChartPressState} from 'victory-native';
import {useFont} from '@shopify/react-native-skia';
import inter from '../../assets/fonts/SpaceMono-Regular.ttf';
import {View} from 'react-native';
import useElectricityPrices from '@/components/ElectricityChart/hooks/useElectricityPrices';
import {formatElectricityPriceData} from '@/components/ElectricityChart/utils';
import ToolTip from '@/components/ElectricityChart/components/Tooltip';

const ElectricityChart = () => {
  const font = useFont(inter, 12);

  const prices = useElectricityPrices();
  const {state, isActive} = useChartPressState({x: 0, y: {price: 0}});

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
        chartPressState={state}
        xAxis={{font}}
        yAxis={[{font}]}
      >
        {({points}) => (
          <>
            <Line points={points.price} color="red" strokeWidth={3} />
            {isActive && (
              <ToolTip x={state.x.position} y={state.y.price.position} />
            )}
          </>
        )}
      </CartesianChart>
    </View>
  );
};

export default ElectricityChart;
