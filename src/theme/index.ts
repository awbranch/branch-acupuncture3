import { Theme, responsiveFontSizes } from '@mui/material';
import { createTheme, ComponentsOverrides } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';

const mode = 'light';

const getTheme = (): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: mode === 'light' ? light : dark,
      shadows: shadows(mode),
      typography: {
        fontFamily: '"Libre Franklin", sans-serif',
        h1: {
          fontFamily: '"Raleway", sans-serif',
          fontSize: '2.875rem',
          letterSpacing: '0.8984rem',
          lineHeight: 1.45,
          fontWeight: 500,
          textTransform: 'uppercase',
        },
        h2: {
          fontFamily: '"Raleway", sans-serif',
          fontSize: '2.25rem',
          fontWeight: 700,
          letterSpacing: '0.625rem',
          lineHeight: 1.17,
          textTransform: 'uppercase',
        },
        h3: {
          fontFamily: '"Raleway", sans-serif',
          fontSize: '1.5rem',
          fontWeight: 600,
          letterSpacing: '0.01042rem',
          textTransform: 'uppercase',
        },
        body1: {
          fontWeight: 300,
          fontSize: '1rem',
          lineHeight: 1.83,
        },
        body2: {
          fontWeight: 300,
          fontSize: '0.875rem',
          lineHeight: 1.43,
        },

        button: {
          textTransform: 'none',
          fontWeight: 'medium' as React.CSSProperties['fontWeight'],
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 400,
              borderRadius: 5,
              paddingTop: 10,
              paddingBottom: 10,
            },
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          } as ComponentsOverrides['MuiButton'],
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          } as ComponentsOverrides['MuiInputBase'],
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          } as ComponentsOverrides['MuiOutlinedInput'],
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          } as ComponentsOverrides['MuiCard'],
        },
      },
    }),
  );

export default getTheme;
