import { createTheme } from '@mui/material/styles';

export const colors = {
  paleBlue: {
    100: '#E5F6FC',
    200: '#CCECF9',
    300: '#B2E3F6',
    400: '#98DAF4',
    500: '#7ED0F1',
    600: '#65C7EE',
    700: '#4BBDEB',
    800: '#31B4E8', //300
  },
  paleGreen: {
    100: '#EDF7E8',
    200: '#DBEFD1',
    300: '#C9E7B9',
    400: '#B7DFA2',
    500: '#A4D68B',
    600: '#92CE74',
    700: '#80C65C',
    800: '#6EBE45', //300
  },
  darkYellow: {
    100: '#FEF5E3',
    200: '#FDEBC7',
    300: '#FCE1AB',
    400: '#FBD78F',
    500: '#F9CC72',
    600: '#F8C256',
    700: '#F7B83A',
    800: '#F6AE1E',
  },
  darkGreen: {
    100: '#D5FAE4',
    200: '#ABF4C9',
    300: '#81EFAE',
    400: '#57EA94',
    500: '#2EE479',
    600: '#1AC962',
    700: '#149F4D',
    800: '#0F7539',
  },
  red: {
    100: '#FFDFDF',
    200: '#FFBFBF',
    300: '#FF9F9F',
    400: '#FF8080',
    500: '#FF6060',
    600: '#FF4040',
    700: '#FF2020',
    800: '#FF0000',
  },
  paleYellow: {
    100: '#FEF8E3',
    200: '#FEF2C7',
    300: '#FDEBAC',
    400: '#FDE590',
    500: '#FCDE74',
    600: '#FBD759',
    700: '#FBD13D',
    800: '#FACA21',
  },
  grey: {
    100: '#EEEEEE',
    200: '#DDDDDD',
    300: '#CCCCCC',
    400: '#BBBBBB',
    500: '#AAAAAA',
    600: '#999999',
    700: '#888888',
    800: '#777777', //300
  },
  purple: {
    100: '#F0ECF4',
    200: '#E2D9EA',
    300: '#D3C6DF',
    400: '#C4B4D4',
    500: '#B5A1C9',
    600: '#A78EBF',
    700: '#987BB4',
    800: '#8968A9',
  },
  orange: {
    100: '#FDEBE4',
    200: '#FAD8C8',
    300: '#F8C4AD',
    400: '#F6B091',
    500: '#F39D76',
    600: '#F1895B',
    700: '#EE763F',
    800: '#EC6224',
  },
  pink: {
    100: '#FDEDF3',
    200: '#FCDAE7',
    300: '#FAC8DA',
    400: '#F8B5CE',
    500: '#F6A3C2',
    600: '#F590B6',
    700: '#F37EA9',
    800: '#F16B9D',
  },
  darkBlue: {
    100: '#D1D1FE',
    200: '#A2A3FD',
    300: '#7475FC',
    400: '#4547FB',
    500: '#1719FA',
    600: '#0507DC',
    700: '#0405AD',
    800: '#03047F',
  },
  white: {
    100: '#FFFFFF',
    200: '#FAFCFF',
    300: '#EFF3F6',
    400: '#D9D9D9',
  },
  black: {
    100: '#000000',
    200: '#484848',
    300: '#333333',
  },
  bgColor: '#EDF1F7',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.paleBlue[800],
      contrastText: colors.white[100],
    },
    secondary: {
      main: colors.white[100],
    },
    success: {
      main: colors.purple[800],
    },
    info: {
      main: colors.darkBlue[800],
      contrastText: colors.white[100],
    },
    warning: {
      main: colors.bgColor,
      contrastText: colors.white[100],
    },
    background: {
      default: colors.bgColor,
    },
  },

  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: '14px',
    fontWeight: 400,
    color: colors.black[200],

    h1: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: '30px',
      fontWeight: 400,
      color: colors.black[100],
    },
    h2: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: '26px',
      fontWeight: 500,
    },

    button: {
      boxShadow: 0,
      textTransform: 'capitalize',
      fontSize: '14px',
      fontWeight: 500,
      borderRadius: '2rem',
    },
  },
});
