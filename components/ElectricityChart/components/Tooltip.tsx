import type {SharedValue} from 'react-native-reanimated';
import {Circle} from '@shopify/react-native-skia';

export default function ToolTip({
  x,
  y,
}: {
  x: SharedValue<number>;
  y: SharedValue<number>;
}) {
  return <Circle cx={x} cy={y} r={8} color="black" />;
}
