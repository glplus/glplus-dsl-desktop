import React, {useId} from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '../Radio/Radio';
import {RadioGroup as GLPRadioGroup} from '@mui/material';

interface IRadioGroupProps {
  ariaLabel: string;
  color: string;
  defaultValue?: string;
  options: any[];
  name: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup = ({ariaLabel, color, defaultValue, options, name, value, onChange}: IRadioGroupProps) => {
  return (
    <GLPRadioGroup
      aria-labelledby={ariaLabel}
      defaultValue={defaultValue}
      name={name}
      value={value !== undefined ? value : defaultValue}
      onChange={onChange}
      color={color}
    >
      {options.map((option) => (
        <FormControlLabel
          key={useId()}
          control={<Radio color={color} />}
          label={option.label}
          value={option.value}
          sx={{
            color: color
          }}
        />
      ))}
    </GLPRadioGroup>
  );
}

export default RadioGroup;
