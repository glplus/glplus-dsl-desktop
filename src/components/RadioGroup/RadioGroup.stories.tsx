import React, {useState} from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'
import RadioGroup from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: 'UI Components/RadioGroup',
  tags: ['autodocs'],
  args: { onChange: fn() },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: 'radio group aria label',
    color: '#3DA026',
    defaultValue: 'female',
    options: [
      {
        label: 'Female',
        value: 'female',
      },
      {
        label: 'Male',
        value: 'male',
      },
    ],
    name: 'gender',
    value: 'female',
  },
};

export const Example = () => {
  const [radioGroupValue, setRadioGroupValue] = useState('female');
  const radioArray = [
    {
      id: 1,
      label: 'Female',
      value: 'female'
    },
    {
      id: 2,
      label: 'Male',
      value: 'male'
    }
  ];

  const onChangeRadio = (event: React.ChangeEvent<Element>) => {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
    setRadioGroupValue((event.target as HTMLInputElement).value);
    setRadioGroupValue(target.value)
  };

  return (
    <>
    <RadioGroup
      defaultValue='female'
      options={radioArray}
      name={'Demo radio group'}
      value={radioGroupValue}
      ariaLabel={'radio group aria label'}
      color={'#ff0000'}
      onChange={(event) => onChangeRadio(event)}
    />
    </>
  )
}
