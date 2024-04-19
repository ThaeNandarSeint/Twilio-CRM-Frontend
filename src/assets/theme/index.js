import { createTheme } from '@mui/material/styles';

export const colors = {
  pink: '#FE9D97',
  green: '#81D1D0',
  white: '#FFFFFF',
  grey: '#828282',
  paleGrey: '#AFB1B6',
  primaryBlack: '#040707',
  realBlack: '#000000',
  black: '#333333',
  bgColor: '#EEF3F7',
  paleRed: '#F40D0D80',
  red: '#F40D0D',
  lightBlue: '#C6EDED',
  errorRed: '#ff0000',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.green,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.pink,
      contrastText: colors.white,
    },
  },

  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: 12,

    h1: {
      fontSize: 20,
    },
    h2: {
      fontSize: 18,
    },
    h3: {
      fontSize: 16,
    },
    h4: {
      fontSize: 14,
    },
    h5: {
      fontSize: 12,
    },
    h6: {
      fontSize: 10,
    },
  },
});
