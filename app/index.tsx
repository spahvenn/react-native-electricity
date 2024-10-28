import ElectricityChart from '@/components/ElectricityChart/ElectricityChart';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '@/utils';
import {View} from 'react-native';
import {InfoBoxArea} from '@/components/InfoBoxArea/InfoBoxArea';

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={{flex: 1, width: '100%', backgroundColor: '#414141'}}>
        <ElectricityChart />
        <InfoBoxArea />
      </View>
    </QueryClientProvider>
  );
}
