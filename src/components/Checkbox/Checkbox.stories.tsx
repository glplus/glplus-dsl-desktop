import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckboxNoLabel: Story = {
  args: {
    ariaLabel: 'checkbox aria label',
    color: 'primary',
    defaultChecked: false,
    labelPlacement: '',
    label: '',
    size: 'medium',
  },
};

export const CheckboxWithLabel: Story = {
  args: {
    ariaLabel: 'checkbox aria label',
    color: 'primary',
    defaultChecked: false,
    labelPlacement: 'end',
    label: 'checkbox label at end',
    size: 'medium',
  },
};

export const CheckboxStyled: Story = {
  args: {
    ariaLabel: 'checkbox aria label',
    color: '#FF0000',
    defaultChecked: false,
    labelPlacement: 'end',
    label: 'checkbox label at end',
    size: 'medium',
  },
};

export const CheckboxLabelStyled: Story = {
  args: {
    ariaLabel: 'checkbox aria label',
    color: '#FF0000',
    defaultChecked: false,
    labelPlacement: 'end',
    label: 'checkbox label at end',
    labelStyle: {
      color: 'red',
    },
    size: 'large',
  },
};

export const CheckboxIconOnly: Story = {
  args: {
    ariaLabel: 'checkbox aria label',
    checkedIcon: 'favorite',
    color: 'primary',
    defaultChecked: false,
    icon: 'favorite',
    labelPlacement: 'end',
    label: '',
    size: 'medium',
  },
};
