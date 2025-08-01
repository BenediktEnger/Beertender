import { createTheme as createMuiTheme } from '@mui/material/styles';
import variants from './variants';
import breakpoints from './breakpoints';
import components from './components';
import shadows from './shadows';

const createTheme = (name: string) => {
  let themeConfig = variants.find((variant) => variant.name === name);

  if (!themeConfig) {
    console.warn(new Error(`The theme ${name} is not valid`));
    themeConfig = variants[0];
  }

  return createMuiTheme(
    {
      spacing: 4,
      breakpoints: breakpoints,
      // @ts-expect-error Incompatible types
      components: components,
      typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        // other typography options
      },
      shadows: shadows,
      palette: themeConfig.palette,
    },
    {
      name: themeConfig.name,
      header: themeConfig.header,
      footer: themeConfig.footer,
      sidebar: themeConfig.sidebar,
    },
  );
};

export default createTheme;
