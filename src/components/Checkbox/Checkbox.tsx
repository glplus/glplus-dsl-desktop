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
  color?: EColorOptions | string | undefined;
  defaultChecked: boolean;
  disabled?: boolean;
  icon?: EIcons | string | undefined;
  label?: string;
  labelPlacement?: ELabelPlacement | string | undefined;
  labelStyle?: any;
  onChange?: (event: React. ChangeEvent<HTMLInputElement>) => void;
  size?: ESizeOptions | string | undefined;
}

const Checkbox = ({ariaLabel, checkedIcon, color, defaultChecked = false, disabled, icon, label = '', labelPlacement = ELabelPlacement.end, labelStyle, onChange, size, ...rest}: ICheckboxProps) => {
  let borderColorString, colorString, checkedIconString, iconString;

  // if we ever want to have different border color than fill color we need to add borderColorString prop and populate it in sx in place of 'color'
  switch (color) {
    case 'primary':
      borderColorString = '#3DA026';
      break;
    case 'secondary':
      borderColorString = '#F67A1A';
      break;
    default:
      borderColorString = color;
      break;
  }

  // if we ever want to have different border color than fill color we need to add borderColorString prop and populate it in sx in place of 'color'
  switch (color) {
    case 'primary':
      colorString = '#3DA026';
      break;
    case 'secondary':
      colorString = '#F67A1A';
      break;
    default:
      colorString = color;
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
              color={EColorOptions[colorString as keyof typeof EColorOptions] || colorString}
              defaultChecked={defaultChecked}
              disabled={disabled}
              icon={iconString}
              inputProps={{
                'aria-label': ariaLabel
              }}
              onChange={onChange}
              size={ESizeOptions[size as keyof typeof ESizeOptions] || undefined}
              sx={{
                color: colorString
              }}
              {...rest}
            />
          }
          label={label}
          labelPlacement={ELabelPlacement[labelPlacement as keyof typeof ELabelPlacement] || undefined}
          sx={
            labelStyle
          }
        />
      ) : (
        <GLPFormControlLabel
          control={
            <GLPCheckbox
              color={EColorOptions[color as keyof typeof EColorOptions] || colorString}
              defaultChecked={defaultChecked}
              disabled={disabled}
              inputProps={{
                'aria-label': ariaLabel
              }}
              onChange={onChange}
              size={ESizeOptions[size as keyof typeof ESizeOptions] || undefined}
              sx={{
                color: colorString
              }}
              {...rest}
            />
          }
          label={label}
          labelPlacement={ELabelPlacement[labelPlacement as keyof typeof ELabelPlacement] || undefined}
          sx={
            labelStyle
          }
        />
      )}

    </ThemeProvider>
  )
}

export default Checkbox
