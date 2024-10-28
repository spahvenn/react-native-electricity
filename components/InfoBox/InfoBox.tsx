import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  priceText: string;
  bottomText: string;
};

export const InfoBox: FC<Props> = ({priceText, bottomText}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.upperTextContainer}>
          <Text style={styles.priceText}>{priceText}</Text>
          <Text style={styles.unitText}>c/kWh</Text>
        </View>
        <View style={styles.lowerTextContainer}>
          <Text style={styles.bottomText}>{bottomText}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    paddingVertical: 12,
    backgroundColor: 'black',
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
  priceText: {color: 'lightgray', fontSize: 24, lineHeight: 24, marginRight: 2},
  unitText: {
    color: 'lightgray',
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 2,
  },
  lowerTextContainer: {justifyContent: 'center', flexDirection: 'row'},
  bottomText: {color: 'lightgray'},
});
