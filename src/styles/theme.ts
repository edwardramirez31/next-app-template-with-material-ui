import { green, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: green.A700,
    },
    secondary: {
      main: '#ff6666',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
