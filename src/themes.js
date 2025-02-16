import  { createTheme} from '@mui/material';
import { green, purple } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark', //default theme
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    // add other properties here…
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
