import React from 'react';
import Button from '../../../src/components/Button/Button';
import { InputLabel } from '@mui/material';
import { TextField as GLPTextField } from '@mui/material';
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
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#343434',
          fontSize: '14px',
          padding: '0 0 8px 5px',
          '&.Mui-focused': {
            color: '#3DA026',
          },
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          /*
          '& label.Mui-focused': {
            color: '#3DA026',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#3DA026',
          },
          '& .MuiOutlinedInput-root': {
            padding: '0px',
          },
           */
          '& .MuiInputBase-root': {
            borderRadius: '10px',
          },
          '& .MuiOutlinedInput-input': {
            padding: '14px',
          },
        }
      }
    }
  }
});

enum EVariants {
  filled = 'filled',
  outlined = 'outlined',
  standard = 'standard'
}

interface ITextFieldProps {
  ariaLabel: string;
  autoFocus?: boolean;
  color?: string;
  dataTestId?: string;
  defaultValue?: string;
  disabled: boolean;
  endAdornment?: string;
  error?: boolean;
  focused: boolean;
  fullWidth: boolean;
  handleIconClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  helperText?: string;
  id: string;
  label: string;
  multiline: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required: boolean;
  type?: string;
  value: string;
  variant?: EVariants;
}

const TextField = ({ariaLabel, autoFocus, color, dataTestId, defaultValue, disabled, endAdornment, error, focused, fullWidth, handleIconClick, helperText, id, label, multiline, onChange, placeholder, required, type, value, variant = EVariants.outlined, ...rest}: ITextFieldProps) => {
  return (
    <ThemeProvider theme={theme}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <GLPTextField
        aria-label={ariaLabel}
        autoFocus={autoFocus}
        id={id}
        color={'primary'}
        data-testid={dataTestId}
        defaultValue={defaultValue}
        disabled={disabled}
        error={error}
        focused={focused}
        fullWidth={fullWidth}
        helperText={error === true ? helperText: ''}
        multiline={multiline}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        slotProps={{
          inputLabel: {
            shrink: false,
          },
          input: {
            endAdornment:
              endAdornment === 'visibility' ? <Button ariaLabel='Show password'
                                            color='primary'
                                            dataTestId='show-password-data-testid'
                                            startIcon={type === 'password' ? 'visibility' : 'visibilityOff'}
                                            label={''}
                                            onClick={handleIconClick}
                                            variant={'iconButton'} /> : null,
          }
        }}
        type={type}
        value={value}
        variant={variant}
        {...rest}
      />
    </ThemeProvider>
  )
}

export default TextField;

