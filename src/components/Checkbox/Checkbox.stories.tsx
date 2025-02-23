import type { Meta, StoryObj } from '@storybook/react';

import Checkbox, { type ICheckboxProps } from './Checkbox';
import { fn } from '@storybook/test';

const meta: Meta<typeof Checkbox> = {
  title: 'UI Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: { onChange: fn() },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NoLabel: Story = {
  args: {
    ariaLabel: 'checkbox aria label',
    color: 'primary',
    defaultChecked: false,
    labelPlacement: undefined,
    label: '',
    size: 'medium',
  },
};

export const WithLabel: Story = {
  args: {
    ariaLabel: 'checkbox aria label',
    color: 'primary',
    defaultChecked: false,
    labelPlacement: 'end',
    label: 'checkbox label at end',
    size: 'medium',
  },
};

export const Styled: Story = {
  args: {
    ariaLabel: 'checkbox aria label',
    color: 'primary',
    defaultChecked: false,
    labelPlacement: 'end',
    label: 'checkbox label at end',
    size: 'medium',

    labelStyle: {
      color: '#3DA026',
    },

    icon: '',
    checkedIcon: undefined,
    disabled: false,
  },
};

export const LabelStyled: Story = {
  args: {
    ariaLabel: 'checkbox aria label',
    color: '#FF0000',
    defaultChecked: false,
    labelPlacement: undefined,
    label: 'checkbox label at end',
    labelStyle: {
      color: 'red',
    },
    size: 'large',
  },
};

export const IconOnly: Story = {
  args: {
    ariaLabel: 'checkbox aria label',
    checkedIcon: 'recurring',
    color: 'primary',
    defaultChecked: false,
    icon: 'recurring',
    labelPlacement: undefined,
    label: '',
    size: 'medium',
  },
};
