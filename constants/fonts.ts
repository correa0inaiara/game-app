import { Theme } from '@react-navigation/native';
import { Platform } from 'react-native';

const CUSTOM_FONT_REGULAR = 'Updock-Regular';

// const WEB_FONT_STACK =
//   'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const fonts = Platform.select({
  web: {
    regular: {
      fontFamily: CUSTOM_FONT_REGULAR,
      fontWeight: '400',
    },
    medium: {
      fontFamily: CUSTOM_FONT_REGULAR,
      fontWeight: '500',
    },
    bold: {
      fontFamily: CUSTOM_FONT_REGULAR,
      fontWeight: '600',
    },
    heavy: {
      fontFamily: CUSTOM_FONT_REGULAR,
      fontWeight: '700',
    },
  },
  ios: {
    regular: {
      fontFamily: CUSTOM_FONT_REGULAR,
      fontWeight: '400',
    },
    medium: {
      fontFamily: CUSTOM_FONT_REGULAR, 
      fontWeight: '500',
    },
    bold: {
      fontFamily: CUSTOM_FONT_REGULAR,   
      fontWeight: '600',
    },
    heavy: {
      fontFamily: CUSTOM_FONT_REGULAR,  
      fontWeight: '700',
    },
  },
  default: {
    regular: {
      fontFamily: CUSTOM_FONT_REGULAR,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: CUSTOM_FONT_REGULAR, 
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: CUSTOM_FONT_REGULAR,   
      fontWeight: '600',
    },
    heavy: {
      fontFamily: CUSTOM_FONT_REGULAR,  
      fontWeight: '700',
    },
  },
} as const satisfies Record<string, Theme['fonts']>);