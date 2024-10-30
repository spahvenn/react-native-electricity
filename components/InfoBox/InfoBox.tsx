import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {MD3Theme, Text, useTheme} from 'react-native-paper';

type Props = {
  priceText: string;
  bottomText: string;
};

export const InfoBox: FC<Props> = ({priceText, bottomText}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.upperTextContainer}>
          <Text style={styles.priceText}>{priceText}</Text>
          <Text style={styles.unitText}>c/kWh</Text>
        </View>
        <View style={styles.lowerTextContainer}>
          <Text>{bottomText}</Text>
        </View>
      </View>
    </View>
  );
};

const makeStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      margin: 8,
      paddingVertical: 12,
      backgroundColor: theme.colors.elevation.level3,
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
