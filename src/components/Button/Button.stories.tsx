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
  args: {
    label: 'Button test',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    color: 'primary',
    fullWidth: false,
    variant: 'contained',
    // centerRipple is not a valid property, removed to fix type error
    ariaLabel: 'test button aria label',
    textColor: '#ffffff',
    disabled: false,
  },
};

export const IconButton: Story = {
  args: {
    color: 'primary',
    fullWidth: false,
    variant: 'iconButton',
    // centerRipple is not a valid property, removed to fix type error
    ariaLabel: 'test button aria label',
    textColor: '#ffffff',
    disabled: false,
    startIcon: 'glplusAddOrange',
  },
};

export const OutlinedGreen: Story = {
  args: {
    color: 'primary',
    fullWidth: false,
    variant: 'outlinedGreen',
    // centerRipple is not a valid property, removed to fix type error
    ariaLabel: 'test button aria label',
    textColor: '#ffffff',
    disabled: false,
    startIcon: 'check',
  },
};

export const OutlinedOrange: Story = {
  args: {
    color: 'primary',
    fullWidth: false,
    variant: 'outlinedOrange',
    // centerRipple is not a valid property, removed to fix type error
    ariaLabel: 'test button aria label',
    textColor: '#ffffff',
    disabled: false,
    startIcon: 'check',
  },
};

export const Registration: Story = {
  args: {
    color: 'primary',
    fullWidth: false,
    variant: 'registration',
    // centerRipple is not a valid property, removed to fix type error
    ariaLabel: 'test button aria label',
    textColor: '#ffffff',
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    color: '',
    fullWidth: false,
    variant: 'text',
    // centerRipple is not a valid property, removed to fix type error
    ariaLabel: 'test button aria label',
    textColor: '#000000',
    disabled: false,
    startIcon: 'home',
  },
};

export const White: Story = {
  args: {
    color: 'primary',
    fullWidth: false,
    variant: 'white',
    // centerRipple is not a valid property, removed to fix type error
    ariaLabel: 'test button aria label',
    textColor: '#ffffff',
    disabled: false,
  },
};
