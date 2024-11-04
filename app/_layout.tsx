import {Stack} from 'expo-router';
import {useStore} from '@/store/store';
import {DefaultTheme, MD3DarkTheme, PaperProvider} from 'react-native-paper';
import {Settings} from 'luxon';
import {StatusBar} from 'expo-status-bar';

Settings.defaultZone = 'Europe/Helsinki';

export default function RootLayout() {
  const {isDarkMode} = useStore();
  return (
    <PaperProvider theme={isDarkMode ? MD3DarkTheme : DefaultTheme}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </PaperProvider>
  );
}
