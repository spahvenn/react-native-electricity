import {Dimensions, StyleSheet, View} from 'react-native';
import useElectricityPrices from '@/components/ElectricityChart/hooks/useElectricityPrices';
import {formatElectricityPriceData} from '@/components/ElectricityChart/utils';
import {BarChart} from 'react-native-gifted-charts';
import {Text, useTheme} from 'react-native-paper';
import {useStore} from '@/store/store';

const ElectricityChart = () => {
  const prices = useElectricityPrices();

  const {isDarkMode} = useStore();
  const theme = useTheme();
  const screenWidth = Dimensions.get('window').width;

  if (!prices.data) {
    return null;
  }

  const electricityPriceData = formatElectricityPriceData(
    prices.data,
    isDarkMode,
  );

  const totalBars = electricityPriceData.length;
  const spacing = 1;
  const yAxisLabelWidth = 45; // Approximate width of the y-axis labels
  const availableWidth = screenWidth - yAxisLabelWidth;
  const barWidth = (availableWidth - spacing * (totalBars - 1)) / totalBars;

  return (
    <View style={styles.container}>
      <Text style={styles.yAxisLabelText}>c/kWh</Text>
      <BarChart
        stepValue={5} // Sets the interval for Y-axis lines
        noOfSections={8} // Number of sections (matches highest yAxis label)
        barWidth={barWidth}
        adjustToWidth
        data={electricityPriceData}
        isAnimated
        color="#07BAD1"
        animationDuration={1000}
        yAxisColor="lightgray"
        yAxisLabelTexts={['0', '5', '10', '15', '20', '25', '30', '35', '40']}
        xAxisLabelTextStyle={{color: theme.colors.onSurface, fontSize: 10}}
        yAxisTextStyle={{color: theme.colors.onSurface}}
        xAxisColor={theme.colors.onSurface}
        rulesColor="gray"
        rulesType="solid"
        spacing={spacing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  yAxisLabelText: {
    position: 'absolute',
    left: 8,
    top: -4,
    fontSize: 14,
  },
});

export default ElectricityChart;
