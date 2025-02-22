import type { Meta, StoryObj } from '@storybook/react';

import Radio from './Radio';

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: 'UI Components/Radio',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Standalone: Story = {
  args: {
    color: '#F67A1A',
    size: 'medium',
  },
};
