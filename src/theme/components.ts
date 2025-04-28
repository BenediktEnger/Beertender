import { Theme } from '@mui/system';

const components = {
  MuiToolbar: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        '@media (min-width:0px)': { minHeight: '56px' },
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4),
        },
      }),
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4),
        },
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: { borderRadius: '0px' },
      contained: {
        textShadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0 2px 4px 0',
      },
    },
  },
  MuiLink: { defaultProps: { underline: 'hover' } },
  MuiCardHeader: {
    defaultProps: { titleTypographyProps: { variant: 'h6' } },
    styleOverrides: {
      action: {
        marginTop: '-4px',
        marginRight: '-4px',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '0px',
        backgroundImage: 'none',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        borderRadius: '0px',
      },
    },
  },
  MuiPickersDay: { styleOverrides: { day: { fontWeight: '300' } } },
  MuiPickersYear: { styleOverrides: { root: { height: '64px' } } },
  MuiPickersCalendar: { styleOverrides: { transitionContainer: { marginTop: '6px' } } },
  MuiPickersCalendarHeader: {
    styleOverrides: {
      iconButton: {
        backgroundColor: 'transparent',
        '& > *': { backgroundColor: 'transparent' },
      },
      switchHeader: {
        marginTop: '2px',
        marginBottom: '4px',
      },
    },
  },
  MuiPickersClock: { styleOverrides: { container: { margin: '32px 0 4px' } } },
  MuiPickersClockNumber: {
    styleOverrides: {
      clockNumber: {
        left: 'calc(50% - 16px)',
        width: '32px',
        height: '32px',
      },
    },
  },
  MuiPickerDTHeader: {
    styleOverrides: {
      dateHeader: {
        '& h4': {
          fontSize: '2.125rem',
          fontWeight: 400,
        },
      },
      timeHeader: {
        '& h3': {
          fontSize: '3rem',
          fontWeight: 400,
        },
      },
    },
  },
  MuiPickersTimePicker: {
    styleOverrides: {
      hourMinuteLabel: {
        '& h2': {
          fontSize: '3.75rem',
          fontWeight: 300,
        },
      },
    },
  },
  MuiPickersToolbar: {
    styleOverrides: {
      toolbar: {
        '& h4': {
          fontSize: '2.125rem',
          fontWeight: 400,
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: { borderRadius: '0px' },
      filled: { textShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: ({ theme }: { theme: Theme }) => ({
        border: '1px solid red',
        borderColor: theme.palette.divider,
        borderRadius: 0,
      }),
    },
  },
};

export default components;
