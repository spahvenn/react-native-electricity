import {Stack} from 'expo-router';
import {useStore} from '@/store/store';
import {DefaultTheme, MD3DarkTheme, PaperProvider} from 'react-native-paper';

export default function RootLayout() {
  const {isDarkMode} = useStore();
  return (
    <PaperProvider theme={isDarkMode ? MD3DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </PaperProvider>
  );
}
