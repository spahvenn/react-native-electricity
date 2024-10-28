import ElectricityChart from '@/components/ElectricityChart/ElectricityChart';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '@/utils';
import {StyleSheet, View} from 'react-native';
import {InfoBoxArea} from '@/components/InfoBoxArea/InfoBoxArea';

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <ElectricityChart />
        <InfoBoxArea />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#414141'},
});
