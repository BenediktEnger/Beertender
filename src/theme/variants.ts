import { grey } from '@mui/material/colors';
import { THEMES } from '../constants';

const Grey = {
  100: '#F7F9FC',
  200: '#EEEEEE',
  300: '#E0E0E0',
  500: '#9E9E9E',
};

const White = '#FFF';

const KSBBlueGradient = 'linear-gradient(180deg, #0066B3 67%, #005096 89%, #00498D 96%, #004385 100%)';

const lightBlue = '#0063B3';
const darkBlue = '#003674';

const Success = '#4CAF50';
const Warning = '#FFC000';
const Error = '#EC1C23';

const TextPrimary = 'rgba(0,0,0,0.87)';
const TextSecondary = 'rgba(0,0,0,0.60)';

const PrimaryGreen = '#60B883';
const PrimaryGreenFocused = '#519E70';

const defaultVariant = {
  name: THEMES.DEFAULT,
  palette: {
    mode: 'light',
    primary: {
      main: lightBlue,
      text: TextPrimary,
      contrastText: White,
      button: lightBlue,
      buttonHover: darkBlue,
      cardHover: Grey[200],
      selected: 'rgba(180, 200, 231, 0.16)',
    },
    primaryButton: {
      main: PrimaryGreen,
      focused: PrimaryGreenFocused,
    },
    secondary: {
      main: lightBlue,
      text: TextSecondary,
      contrastText: '#B3C7DA',
    },
    background: {
      default: Grey[100],
      paper: White,
      grey: '#B0B0B0',
    },
    primaryActionButton: {
      background: lightBlue,
      color: White,
      border: '1px solid white',
      ':hover': { backgroundColor: darkBlue },
    },
    alarming: {
      colorOperable: Success,
      colorWarning: Warning,
      colorAlarm: Error,
    },
    text: { disabled: '#adadad' },
  },
  header: {
    color: grey[500],
    background: Grey[100],
    search: { color: grey[800] },
    indicator: { background: lightBlue },
    bellIcon: '#707070',
    userIcon: '#93b1de',
  },
  footer: {
    color: grey[500],
    background: White,
  },
  sidebar: {
    color: grey[200],
    background: darkBlue,
    backgroundGradient: KSBBlueGradient,
    header: {
      color: grey[200],
      background: lightBlue,
      brand: { color: lightBlue },
    },
  },
};

const variants: Array<VariantType> = [defaultVariant];

export default variants;

export type VariantType = {
  name: string
  palette: {
    primary: MainContrastTextType
    secondary: MainContrastTextType
  }
  header: ColorBgType & {
    search: {
      color: string
    }
    indicator: {
      background: string
    }
  }
  sidebar: ColorBgType & {
    backgroundGradient: string;
    header: ColorBgType & {
      brand: {
        color: string
      }
    }
  }
  footer: any;
}

type MainContrastTextType = {
  main: string
  contrastText: string
}

type ColorBgType = {
  color: string
  background: string
}
