import ElectricityChart from '@/components/ElectricityChart/ElectricityChart';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '@/utils';
import {View} from 'react-native';

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={{flex: 1}}>
        <ElectricityChart />
      </View>
    </QueryClientProvider>
  );
}
