import {SplashScreen, Stack} from 'expo-router';
import {useStore} from '@/src/store/store';
import {DefaultTheme, MD3DarkTheme, PaperProvider} from 'react-native-paper';
import {Settings} from 'luxon';
import {useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';

Settings.defaultZone = 'Europe/Helsinki';
SplashScreen.preventAutoHideAsync(); // Prevents the splash screen from auto-hiding

export default function RootLayout() {
  const {isDarkMode} = useStore();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 500);
  }, []);

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
