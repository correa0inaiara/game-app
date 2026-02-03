/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Theme } from '@react-navigation/native';
import { Platform } from 'react-native';
import { fonts } from './fonts';

export const Colors = {
  light: {
    primary: '#60AB9A',
    background: '#FFFFFF',
    card: '#2A9D8F',
    text: '#2A9D8F',
    icon: '#457B9D',
    border: '#457B9D',
    notification: '#457B9D',
  },
  dark: {
    primary: '#62C370',
    background: '#62C370',
    card: '#9AD1D4',
    text: '#20063B',
    icon: '#20063B',
    border: '#C2F9BB',
    notification: '#CC3363',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

// export const CustomFonts = {
//   regular: FontStyle;
//   medium: FontStyle;
//   bold: FontStyle;
//   heavy: FontStyle;
// }

// type FontStyle = {
//   fontFamily: string;
//   fontWeight:
//     | 'normal'
//     | 'bold'
//     | '100'
//     | '200'
//     | '300'
//     | '400'
//     | '500'
//     | '600'
//     | '700'
//     | '800'
//     | '900';
// };

// interface NativeTheme {
//   dark: boolean;
//   colors: {
//     primary: string;
//     background: string;
//     card: string;
//     text: string;
//     border: string;
//     notification: string;
//   };
//   fonts: {
//     regular: FontStyle;
//     medium: FontStyle;
//     bold: FontStyle;
//     heavy: FontStyle;
//   };
// }

export const CustomDarkTheme: Theme = {
  dark: true,
  colors: Colors.dark,
  fonts: fonts
}

export const CustomLightTheme: Theme = {
  dark: false,
  colors: Colors.light,
  fonts: fonts
}