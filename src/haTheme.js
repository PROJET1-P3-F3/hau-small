import { createTheme } from '@mui/material'

const palette = {
  background: {
    default: '#ECF2FF'
  },
  primary: {
    main: '#ca8a04',
    light: '#fef08a',
    dark: '#a16207',
    contrastText: '#ffffff'
  },
  secondary: {
    main: '#4f46e5',
    light: '#818cf8',
    dark: '#3730a3',
    contrastText: '#ffffff'
  },
  neutral: {
    light: 'rgba(0,0,0,0.1)',
    main: 'rgba(0,0,0,0.3)',
    dark: 'rgba(0,0,0,0.5)',
    contrastText: 'rgba(0,0,0,0.7)'
  }
}

export const mainTheme = createTheme({
  palette,
  typography: {
    fontFamily: ['Quicksand', 'sans-serif'].join(','),
    fontSize: 15
  },
  // change the default Mui or Ra component style
  components: {
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: '0px 3px 20px 1px rgba(0, 0, 0, 0.05)'
        }
      }
    },
    RaLayout: {
      styleOverrides: {
        root: {
          '& .RaLayout-content': {
            '& .MuiPaper-root': {
              borderRadius: '20px',
              paddingBlock: '0.5rem',
              overflowX: 'hidden'
            }
          }
        }
      }
    }
  }
})
