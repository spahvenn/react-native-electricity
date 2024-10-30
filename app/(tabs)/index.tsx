import ElectricityChart from '@/components/ElectricityChart/ElectricityChart';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '@/utils';
import {InfoBoxArea} from '@/components/InfoBoxArea/InfoBoxArea';
import LayoutWrapper from '@/components/LayoutWrapper/LayoutWrapper';

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
