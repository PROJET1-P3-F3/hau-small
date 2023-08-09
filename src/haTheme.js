import { createTheme } from '@mui/material'
import { defaultTheme } from 'react-admin'

export const BUTTON = {
  minWidth: '5rem',
  paddingBlock: '0.7rem',
  paddingInline: '1.2rem',
  textTransform: 'capitalize',
  borderRadius: '5rem',
  margin: '0.2rem'
}

const palette = {
  background: {
    default: 'rgba(248,243,229, 50)'
  },
  primary: {
    main: 'rgb(217, 162, 80)',
    light: 'rgb(222,196,125)',
    dark: 'rgb(224, 142, 18)',
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
  },
  dark: '#212529',
  light: '#f8f9fa',
  beige: 'rgb(248,243,229)',
  hei: 'rgb(159,115,0)',
  orangeLight: 'rgb(222,196,125)',
  logo: 'rgb(223,164,8)'
}

export const mainTheme = createTheme({
  ...defaultTheme,
  palette,
  sidebar: {
    width: 250,
    closedWidth: 70
  },
  typography: {
    fontFamily: ['Ysabeau Infant', 'sans-serif'].join(','),
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
              borderRadius: '15px',
              paddingBlock: '0.5rem',
              overflowX: 'hidden'
            }
          }
        }
      }
    },
    RaAppBar: {
      styleOverrides: {
        root: {
          border: 'none',
          boxShadow: 'none',
          '& .RaAppBar-toolbar': {
            background: palette.primary.main,
            paddingBlock: '0.5rem',
            border: 'none',
            boxShadow: 'none'
          }
        }
      }
    },
    RaSidebar: {
      styleOverrides: {
        root: {
          height: 'auto',
          background: 'white'
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '& .MuiButtonBase-root': {
            padding: '0.5rem'
          },
          '& .RaMenuItem-link': {
            padding: '0px',
            margin: '0px'
          }
        }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { color: 'primary' },
          style: {
            background: palette.primary.main,
            color: palette.primary.contrastText,
            '&:hover': {
              background: palette.primary.dark
            }
          }
        },
        {
          props: { disabled: true },
          style: {
            background: palette.neutral.main,
            color: palette.neutral.contrastText,
            '&:hover': {
              background: palette.neutral.main
            }
          }
        },
        {
          props: { color: 'secondary' },
          style: {
            background: palette.secondary.main,
            color: palette.secondary.contrastText,
            '&:hover': {
              background: palette.secondary.dark
            }
          }
        }
      ],
      styleOverrides: {
        root: BUTTON
      }
    },
    RaMenu: {
      styleOverrides: {
        root: {
          marginTop: '20px'
        }
      }
    }
  }
})
