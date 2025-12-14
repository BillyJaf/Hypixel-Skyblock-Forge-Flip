import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2f3b52', // muted dark grey-blue
    },
    secondary: {
      main: '#6b7280', // soft grey
    },
    background: {
      default: '#f7f8fa', // page background
      paper: '#ffffff',  // cards, surfaces
    },
    text: {
      primary: '#1f2933',
      secondary: '#6b7280',
    },
    divider: '#e5e7eb',
  },
});

export default theme;