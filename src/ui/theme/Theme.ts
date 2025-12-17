import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#1b1b1bff',
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
