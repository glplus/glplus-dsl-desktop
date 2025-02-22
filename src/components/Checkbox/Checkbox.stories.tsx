import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI Components/Checkbox',
  component: Checkbox,
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
    checkedIcon: 'suggested',
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
    checkedIcon: undefined,
    color: 'primary',
    defaultChecked: false,
    icon: undefined,
    labelPlacement: undefined,
    label: '',
    size: 'medium',
  },
};
