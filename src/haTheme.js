import { createTheme } from '@mui/material'

const palette = {
  background: {
    default: 'rgb(248,243,229)'
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
  },
  dark: '#212529',
  ligth: '#f8f9fa',
  beige: 'rgb(248,243,229)',
  hei: 'rgb(159,115,0)',
  orangeLigth: 'rgb(222,196,125)',
  logo: 'rgb(223,164,8)'
}

export const mainTheme = createTheme({
  palette,
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
    CustomCard: {
      styleOverrides: {
        root: {
          padding: '30px',
          marginBottom: '50px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0px 3px 20px 1px rgba(0, 0, 0, 0.05)'
        }
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
            background: palette.orangeLigth,
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
    RaMenu: {
      styleOverrides: {
        root: {
          marginTop: '20px',
          '&.RaMenu-closed': {},
          '&.RaMenu-open': {
            marginLeft: '20px'
          }
        }
      }
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          marginBottom: '0.4rem',
          borderRadius: '50px 0px 0px 50px',
          fontWeight: '600',
          paddingBlock: '0.7rem',
          color: palette.dark,
          position: 'relative',
          '&.RaMenuItemLink-active': {
            background: palette.beige,
            color: palette.hei,
            '&:after': {
              content: '""',
              position: 'absolute',
              top: '-20px',
              left: '180px',
              width: '40px',
              height: '40px',
              borderRadius: '0 0 15px 0',
              background: 'transparent',
              transform: 'translateY(-50%)',
              boxShadow: '8px 4px rgb(248,243,229)',
              zIndex: -1
            },
            '&:before': {
              content: '""',
              position: 'absolute',
              bottom: '-60px',
              left: '180px',
              width: '40px',
              height: '40px',
              borderRadius: '0 15px 0 0',
              background: 'transparent',
              transform: 'translateY(-50%)',
              boxShadow: '8px -4px rgb(248,243,229)',
              zIndex: -1
            },
            '&:hover': {},
            '& .MuiSvgIcon-root': {
              color: palette.hei
            }
          },
          '&.RaMenuItemLink-inactive': {
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
          },
          '& .MuiSvgIcon-root': {
            color: palette.dark
          }
        }
      }
    }
  }
)
