import FinnishElectricityChart from '@/components/ElectricityChart/FinnishElectricityChart';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '@/utils';

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <FinnishElectricityChart />
    </QueryClientProvider>
  );
}
