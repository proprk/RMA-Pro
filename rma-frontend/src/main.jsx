import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  typography: {
    fontFamily: '"Lufga Patch", "Lufga", "Poppins", sans-serif',
  },
  palette: {
    background: {
      default: 'transparent', // Let the CSS body gradient show through
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
