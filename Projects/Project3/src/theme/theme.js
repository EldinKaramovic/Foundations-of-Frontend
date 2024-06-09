import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green
    },
    secondary: {
      main: '#FF5722', // Orange
    },
    background: {
      default: '#F7F7F7', // Light Gray
    },
    text: {
      primary: '#333333', // Dark Gray
      secondary: '#666666', // Medium Gray
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
      color: '#333333', // Dark Gray
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
      color: '#444444', // Medium Gray
    },
    body1: {
      fontSize: '1.2rem',
      color: '#666666', // Medium Gray
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  shadows: ['none', '0 4px 8px rgba(0, 0, 0, 0.1)', '0 8px 16px rgba(0, 0, 0, 0.1)'],
});

export default theme;