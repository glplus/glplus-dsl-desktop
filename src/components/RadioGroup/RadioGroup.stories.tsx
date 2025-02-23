import type { Meta, StoryObj } from '@storybook/react';

import RadioGroup from './RadioGroup';
import { fn } from '@storybook/test'

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
