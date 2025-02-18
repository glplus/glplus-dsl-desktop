import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './Button';

const meta = {
  title: 'UI Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    label: 'Button test',
    color: 'primary',
    fullWidth: false,
    variant: 'contained',
    centerRipple: true,
    ariaLabel: 'test button aria label',
    textColor: '#ffffff',
    disabled: false,
  },
};

export const IconButton: Story = {
  args: {
    label: 'Button test',
    color: 'primary',
    fullWidth: false,
    variant: 'iconButton',
    centerRipple: true,
    ariaLabel: 'test button aria label',
    textColor: '#ffffff',
    disabled: false,
    startIcon: 'add',
  },
};

export const OutlinedGreen: Story = {
  args: {
    label: 'Button test',
    fullWidth: false,
    variant: 'outlinedGreen',
    centerRipple: true,
    ariaLabel: 'test button aria label',
    textColor: '#ffffff',
    disabled: false,
    startIcon: 'check',
  },
};

export const OutlinedOrange: Story = {
  args: {
    label: 'Button test',
    color: 'primary',
    fullWidth: false,
    variant: 'outlinedOrange',
    centerRipple: true,
    ariaLabel: 'test button aria label',
    textColor: '#ffffff',
    disabled: false,
    startIcon: 'check',
  },
};

export const Registration: Story = {
  args: {
    label: 'Button test',
    color: 'primary',
    fullWidth: false,
    variant: 'registration',
    centerRipple: true,
    ariaLabel: 'test button aria label',
    textColor: '#ffffff',
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    label: 'Home',
    color: '',
    fullWidth: false,
    variant: 'text',
    centerRipple: true,
    ariaLabel: 'test button aria label',
    textColor: '#000000',
    disabled: false,
    startIcon: 'home',
  },
};

export const White: Story = {
  args: {
    label: 'Button test',
    color: 'primary',
    fullWidth: false,
    variant: 'white',
    centerRipple: true,
    ariaLabel: 'test button aria label',
    textColor: '#ffffff',
    disabled: false,
  },
};
