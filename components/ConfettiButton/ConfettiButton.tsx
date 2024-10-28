import ConfettiCannon from 'react-native-confetti-cannon';
import Explosion from 'react-native-confetti-cannon';
import {Pressable, StyleSheet, Text} from 'react-native';
import {useRef} from 'react';

export default function ConfettiButton() {
  const confettiRef = useRef<Explosion | null>(null);

  const onPress = () => {
    confettiRef.current?.start();
  };

  return (
    <>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Press for some 🎉</Text>
      </Pressable>
      <ConfettiCannon
        count={200}
        origin={{x: -15, y: -15}}
        fadeOut={true}
        autoStart={false}
        ref={(ref) => (confettiRef.current = ref)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  button: {backgroundColor: 'black', padding: 8, borderRadius: 5},
  text: {
    color: 'lightgrey',
    fontSize: 18,
  },
});
