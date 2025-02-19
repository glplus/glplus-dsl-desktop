import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoLabel: Story = {
  args: {
    ariaLabel: 'checkbox aria label',
    color: 'primary',
    defaultChecked: false,
    labelPlacement: '',
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
    color: '#FF0000',
    defaultChecked: false,
    labelPlacement: 'end',
    label: 'checkbox label at end',
    size: 'medium',
  },
};

export const LabelStyled: Story = {
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

export const IconOnly: Story = {
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
