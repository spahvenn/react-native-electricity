import ElectricityChart from '@/src/components/ElectricityChart/ElectricityChart';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '@/src/utils';
import {InfoBoxArea} from '@/src/components/InfoBoxArea/InfoBoxArea';
import LayoutWrapper from '@/src/components/LayoutWrapper/LayoutWrapper';

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutWrapper>
        <ElectricityChart />
        <InfoBoxArea />
      </LayoutWrapper>
    </QueryClientProvider>
  );
}
