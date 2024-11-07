import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Surface, Text, useTheme} from 'react-native-paper';

type Props = {
  priceText: string;
  bottomText: string;
};

export const InfoBox: FC<Props> = ({priceText, bottomText}) => {
  const theme = useTheme();
  return (
    <Surface style={styles.container} elevation={2}>
      <View>
        <View style={styles.upperTextContainer}>
          <Text style={styles.priceText}>{priceText}</Text>
          <Text style={styles.unitText}>c/kWh</Text>
        </View>
        <View style={styles.lowerTextContainer}>
          <Text>{bottomText}</Text>
        </View>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 4,
  },
  priceText: {
    fontSize: 24,
    lineHeight: 24,
    marginRight: 2,
  },
  unitText: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 2,
  },
  lowerTextContainer: {justifyContent: 'center', flexDirection: 'row'},
});
