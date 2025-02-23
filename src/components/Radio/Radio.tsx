import React from 'react';
import { Radio as GLPRadio } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    primary: {
      main: '#3DA026',
    },
    secondary: {
      main: '#F67A1A',
    },
  },
});


enum EColorOptions {
  error = 'error',
  info = 'info',
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  warning = 'warning'
}

enum ESizeOptions {
  medium = 'medium',
  small = 'small'
}

export interface IRadioProps {
  color: EColorOptions | string;
  onChange?: (event: React. ChangeEvent<HTMLInputElement>) => void;
  size?: ESizeOptions | string | undefined;
}

const Radio = ({color = EColorOptions.primary, onChange, size, ...rest}: IRadioProps) => {
  let colorString;

  // TODO: if we want to use more of the OOTB color names we need to add conditions for them here
  switch (color) {
    case 'primary':
      colorString = '#3DA026'
      break;
    case 'secondary':
      colorString = '#F67A1A'
      break;
    default:
      colorString = color !== undefined ? color : '';
      break;
  }

return (
  <ThemeProvider theme={theme}>
    <GLPRadio
      color={EColorOptions[color as keyof typeof EColorOptions] || colorString}
      onChange={onChange}
      size={ESizeOptions[size as keyof typeof ESizeOptions] || undefined}
      sx={{
        color: colorString
      }}
      {...rest}
    />
  </ThemeProvider>
)
}

export default Radio;
