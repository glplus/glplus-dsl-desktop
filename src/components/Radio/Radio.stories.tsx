import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'
import Radio from './Radio';


const meta: Meta<typeof Radio> = {
  component: Radio,
  title: 'UI Components/Radio',
  tags: ['autodocs'],
  args: { onChange: fn() },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Standalone: Story = {
  args: {
    color: '#F67A1A',
    size: 'medium',
  }
};
