import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00d9ff' }, // Brighter cyan
    secondary: { main: '#00bcd4' },
    background: {
      default: '#0a0e27',
      paper: '#12172a'
    },
    text: {
      primary: '#ffffff',
      secondary: '#cbd5f5'
    },
    divider: 'rgba(148, 163, 184, 0.2)'
  },
  typography: {
    fontFamily:
      "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: -0.5,
      fontSize: '3.5rem',
      lineHeight: 1.1
    },
    h2: {
      fontWeight: 700,
      letterSpacing: -0.3,
      fontSize: '2.8rem',
      lineHeight: 1.2
    },
    h3: {
      fontWeight: 700,
      letterSpacing: 0.5,
      fontSize: '2rem',
      lineHeight: 1.3
    },
    h4: {
      fontWeight: 600,
      letterSpacing: 0.4,
      fontSize: '1.5rem'
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem'
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.1rem'
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.8
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6
    },
    subtitle1: {
      fontSize: '1.2rem',
      fontWeight: 500,
      lineHeight: 1.7
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 600
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(18, 23, 42, 0.8)',
          borderColor: 'rgba(148, 163, 184, 0.2)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          padding: '10px 24px',
          borderRadius: '8px'
        },
        contained: {
          boxShadow: '0 4px 15px rgba(0, 217, 255, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 25px rgba(0, 217, 255, 0.4)'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(18, 23, 42, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            border: '1px solid rgba(0, 217, 255, 0.4)',
            boxShadow: '0 8px 32px rgba(0, 217, 255, 0.1)'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(15, 23, 42, 0.5)',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0, 217, 255, 0.4)'
            }
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 217, 255, 0.1)',
          borderColor: 'rgba(0, 217, 255, 0.3)',
          color: '#ffffff',
          fontWeight: 500
        }
      }
    }
  }
})

export default theme
