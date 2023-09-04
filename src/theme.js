import { createTheme } from '@mui/material';

export const shades = {
  primary: {
    100: '#edefe8',
    200: '#dae0d0',
    300: '#c8d0b9',
    400: '#b5c1a1',
    500: '#a3b18a',
    600: '#828e6e',
    700: '#626a53',
    800: '#414737',
    900: '#21231c',
  },
  secondary: {
    100: '#d8ded9',
    200: '#b0bdb3',
    300: '#899c8c',
    400: '#617b66',
    500: '#3a5a40',
    600: '#2e4833',
    700: '#233626',
    800: '#17241a',
    900: '#0c120d',
  },
  neutral: {
    100: '#fffefc',
    200: '#fffdf9',
    300: '#fffdf6',
    400: '#fffcf3',
    500: '#fffbf0',
    600: '#ccc9c0',
    700: '#999790',
    800: '#666460',
    900: '#333230',
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
});
