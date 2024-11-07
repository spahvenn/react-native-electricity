import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import ConfettiButton from '@/src/components/ConfettiButton/ConfettiButton';
import LayoutWrapper from '@/src/components/LayoutWrapper/LayoutWrapper';
import DarkModeToggleButton from '@/src/components/ThemeToggleButton/DarkModeToggleButton';

export default function About() {
  return (
    <LayoutWrapper>
      <View style={styles.container}>
        <Text style={styles.credits}>Made by:</Text>
        <Text style={styles.creditsName}>Sami Ahvenniemi</Text>
        <Text style={styles.email}>sami.ahvenniemi@valagroup.com</Text>
        <ConfettiButton />
        <DarkModeToggleButton />
      </View>
    </LayoutWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  credits: {
    fontSize: 24,
    marginBottom: 8,
  },
  creditsName: {
    fontSize: 18,
  },
  email: {
    fontSize: 18,
    marginTop: 4,
    marginBottom: 16,
  },
});
