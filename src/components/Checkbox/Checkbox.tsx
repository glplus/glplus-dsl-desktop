import React from 'react';
import { Checkbox as GLPCheckbox } from '@mui/material';
import { FormControlLabel as GLPFormControlLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AutorenewIcon from '@mui/icons-material/Autorenew'

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

enum EIcons {
  favorite = 'favorite',
  recurring = 'recurring',
  suggested = 'suggested'
}

enum ELabelPlacement {
  bottom = 'bottom',
  end = 'end',
  start = 'start',
  top = 'top'
}

enum ESizeOptions {
  large = 'large',
  medium = 'medium',
  small = 'small'
}

interface ICheckboxProps {
  ariaLabel: string;
  checkedIcon?: EIcons;
  color?: EColorOptions | string;
  defaultChecked: boolean;
  icon?: EIcons;
  label?: string;
  labelPlacement?: ELabelPlacement;
  labelStyle?: any;
  onChange?: (event: React.ChangeEvent) => void;
  size?: ESizeOptions;
}

const Checkbox = ({ariaLabel, checkedIcon, color, defaultChecked = false, icon, label = '', labelPlacement = 'end', labelStyle, ...rest}: ICheckboxProps) => {
  let borderColorString, checkedIconString, iconString;

  switch (color) {
    case 'primary':
      borderColorString = '#3DA026'
      break;
    case 'secondary':
      borderColorString = '#F67A1A'
      break;
    default:
      borderColorString = color !== undefined ? color : '';
      break;
  }

  switch (checkedIcon) {
    case 'favorite':
      checkedIconString = <FavoriteIcon style={{ color: '#EC1C24' }} />
      break;
    case 'recurring':
      checkedIconString = <AutorenewIcon style={{ color: '#3DA026' }} />
      break;
    case 'suggested':
      checkedIconString = <StarIcon style={{ color: '#FCB813' }} />
      break;
    default:
      checkedIconString = '';
      break;
  }

  switch (icon) {
    case 'favorite':
      iconString = <FavoriteBorderIcon style={{ color: '#EC1C24' }} />
      break;
    case 'recurring':
      iconString = <AutorenewIcon style={{ color: 'lightgray' }} />
      break;
    case 'suggested':
      iconString = <StarBorderIcon style={{ color: 'lightgray' }} />
      break;
    default:
      iconString = '';
      break;
  }

  return (
    <ThemeProvider theme={theme}>
      {icon !== undefined && icon !== '' ? (
        <GLPFormControlLabel
          control={
            <GLPCheckbox
              checkedIcon={checkedIconString}
              color={color}
              defaultChecked={defaultChecked}
              icon={iconString}
              inputProps={{
                'aria-label': ariaLabel
              }}
              sx={{
                color: color
              }}
              {...rest}
            />
          }
          label={label}
          labelPlacement={labelPlacement}
          sx={
            labelStyle
          }
        />
      ) : (
        <GLPFormControlLabel
          control={
            <GLPCheckbox
              color={color}
              defaultChecked={defaultChecked}
              inputProps={{
                'aria-label': ariaLabel
              }}
              sx={{
                color: color
              }}
              {...rest}
            />
          }
          label={label}
          labelPlacement={labelPlacement}
          sx={
            labelStyle
          }
        />
      )}

    </ThemeProvider>
  )
}

export default Checkbox
