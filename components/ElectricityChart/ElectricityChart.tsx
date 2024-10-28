import {Dimensions, Text, View} from 'react-native';
import useElectricityPrices from '@/components/ElectricityChart/hooks/useElectricityPrices';
import {formatElectricityPriceData} from '@/components/ElectricityChart/utils';
import {BarChart} from 'react-native-gifted-charts';
import {ChartDataItem} from '@/types/types';

const ElectricityChart = () => {
  const prices = useElectricityPrices();
  const screenWidth = Dimensions.get('window').width;

  if (!prices.data) {
    return null;
  }

  const electricityPriceData = formatElectricityPriceData(prices.data);
  const totalBars = electricityPriceData.length;
  const spacing = 1;
  const yAxisLabelWidth = 45; // Approximate width of the y-axis labels
  const availableWidth = screenWidth - yAxisLabelWidth;
  const barWidth = (availableWidth - spacing * (totalBars - 1)) / totalBars;

  return (
    <View
      style={{
        width: screenWidth,
        paddingVertical: 20,
      }}
    >
      <BarChart
        yAxisLabelTexts={[
          '-5',
          '0',
          '5',
          '10',
          '15',
          '20',
          '25',
          '30',
          '35',
          '40',
        ]}
        stepValue={5} // Sets the interval for Y-axis lines
        noOfSections={8} // Number of sections (matches highest yAxis label)
        barWidth={barWidth}
        frontColor="#177AD5"
        adjustToWidth
        data={electricityPriceData}
        // Make room for tooltip
        isAnimated
        color="#07BAD1"
        animationDuration={1000}
        yAxisColor="lightgray"
        yAxisTextStyle={{color: 'lightgray'}}
        xAxisLabelTextStyle={{color: 'lightgray', fontSize: 10}}
        xAxisColor="lightgray"
        backgroundColor="#414141"
        rulesColor="gray"
        rulesType="solid"
        spacing={spacing}
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
