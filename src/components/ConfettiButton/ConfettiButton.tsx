import ConfettiCannon from 'react-native-confetti-cannon';
import Explosion from 'react-native-confetti-cannon';
import {useRef} from 'react';
import {Button} from 'react-native-paper';

export default function ConfettiButton() {
  const confettiRef = useRef<Explosion | null>(null);

  const onPress = () => {
    confettiRef.current?.start();
  };

  return (
    <>
      <Button mode="contained" onPress={onPress} style={{marginBottom: 16}}>
        Press for some 🎉
      </Button>
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
