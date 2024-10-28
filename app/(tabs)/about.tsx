import {StyleSheet, Text, View} from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.credits}>Made by:</Text>
      <Text style={styles.credits}>Sami Ahvenniemi</Text>
      <Text style={styles.email}>sami.ahvenniemi@valagroup.com</Text>
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
  },
  email: {
    color: 'lightgray',
    fontSize: 18,
    marginTop: 4,
  },
});
