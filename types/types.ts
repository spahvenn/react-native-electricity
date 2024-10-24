export type ElectricityPrice = {
  price: number;
  startDate: string;
  endDate: string;
};

export type ChartDataItem = {
  value: number; // The value of the bar (required)
  label?: string; // Optional label for the bar
};
