import React, { useEffect } from 'react'
import { useFonts } from 'expo-font';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors, CustomDarkTheme, CustomLightTheme } from '@/constants/theme';

const _layout = () => {
  const [fontsLoaded] = useFonts({
    'Updock-Regular': require('@/assets/fonts/Updock-Regular.ttf'),
    // adicione outras variações se tiver (bold, medium, etc)
  });
  const colorScheme = useColorScheme();

  useEffect(() => {
  }, [fontsLoaded]);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  )
}

export default _layout