import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Logo, { type ILogoProps } from './Logo';

const meta = {
  title: 'UI Components/Logo',
  component: Logo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'left',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: {
    color: 'primary',
    size: 'desktop',
    style: 'full',
  },
};

export const Partial: Story = {
  args: {
    color: 'primary',
    size: 'desktop',
    style: 'partial',
  },
};
