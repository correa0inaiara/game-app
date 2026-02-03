import React from 'react'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors, CustomDarkTheme, CustomLightTheme } from '@/constants/theme';

const _layout = () => {
  
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  )
}

export default _layout