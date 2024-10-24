import {Text, View} from 'react-native';
import useElectricityPrices from '@/components/ElectricityChart/hooks/useElectricityPrices';
import {formatElectricityPriceData} from '@/components/ElectricityChart/utils';
import {BarChart} from 'react-native-gifted-charts';
import {ChartDataItem} from '@/types/types';

const ElectricityChart = () => {
  const prices = useElectricityPrices();

  if (!prices.data) {
    return null;
  }

  const electricityPriceData = formatElectricityPriceData(prices.data);
  const maxValue = Math.max(...electricityPriceData.map((item) => item.value));

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 50,
        backgroundColor: '#414141',
      }}
    >
      <BarChart
        yAxisLabelTexts={['c/kWh']}
        frontColor="#177AD5"
        adjustToWidth
        data={electricityPriceData}
        // Make room for tooltip
        maxValue={maxValue + maxValue * 0.2}
        isAnimated
        color="#07BAD1"
        noOfSections={5}
        animationDuration={1000}
        yAxisTextStyle={{color: 'lightgray'}}
        xAxisLabelTextStyle={{color: 'lightgray'}}
        backgroundColor="#414141"
        rulesColor="gray"
        rulesType="solid"
        yAxisColor="lightgray"
        xAxisColor="lightgray"
        renderTooltip={(item: ChartDataItem) => {
          return (
            <View
              style={{
                marginBottom: -5,
                marginLeft: -20,
                backgroundColor: 'white',
                paddingHorizontal: 6,
                paddingVertical: 4,
                borderRadius: 4,
                zIndex: 9999,
              }}
            >
              <Text>{item.value.toFixed(2)} c/kWh</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ElectricityChart;
