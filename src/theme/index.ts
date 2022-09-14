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
          marginBottom: '1.5rem',
        },
        h2: {
          fontFamily: '"Raleway", sans-serif',
          fontSize: '2rem',
          fontWeight: 700,
          letterSpacing: '0.625rem',
          lineHeight: 1.17,
          textTransform: 'uppercase',
          marginBottom: '1rem',
        },
        h3: {
          fontFamily: '"Raleway", sans-serif',
          fontSize: '1.25rem',
          fontWeight: 600,
          letterSpacing: '0.2rem',
          textTransform: 'uppercase',
        },
        h4: {
          fontFamily: '"Raleway", sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '0.1rem',
          fontSize: '0.9rem',
        },
        subtitle1: {
          fontFamily: '"Raleway", sans-serif',
          letterSpacing: '0.1rem',
          fontSize: '1.5rem',
        },
        body1: {
          fontWeight: 300,
          fontSize: '1.25rem',
          lineHeight: 1.83,
        },
        body2: {
          fontWeight: 300,
          fontSize: '0.875rem',
          lineHeight: 1.43,
        },

        button: {
          fontFamily: '"Raleway", sans-serif',
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
              fontWeight: 500,
              borderRadius: 23,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 50,
              paddingRight: 50,
            },
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
