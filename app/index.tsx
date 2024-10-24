import ElectricityChart from '@/components/ElectricityChart/ElectricityChart';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '@/utils';

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <ElectricityChart />
    </QueryClientProvider>
  );
}
