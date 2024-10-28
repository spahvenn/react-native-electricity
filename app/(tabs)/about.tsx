import {StyleSheet, Text, View} from 'react-native';
import ConfettiButton from '@/components/ConfettiButton/ConfettiButton';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.credits}>Made by:</Text>
      <Text style={styles.creditsName}>Sami Ahvenniemi</Text>
      <Text style={styles.email}>sami.ahvenniemi@valagroup.com</Text>
      <ConfettiButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414141',
    justifyContent: 'center',
    alignItems: 'center',
  },
  credits: {
    color: 'lightgray',
    fontSize: 24,
    marginBottom: 8,
  },
  creditsName: {
    color: 'lightgray',
    fontSize: 18,
  },
  email: {
    color: 'lightgray',
    fontSize: 18,
    marginTop: 4,
    marginBottom: 16,
  },
  button: {
    color: 'lightgray',
  },
});
