import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ShadcnAlert } from './ShadcnAlert';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

const meta: Meta<typeof ShadcnAlert> = {
  title: 'Components/Shadcn Alert',
  component: ShadcnAlert,
  argTypes: {
    shadcnicon: {
      control: 'boolean',
      defaultValue: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ShadcnAlert>;

const successIcon = React.createElement(CheckCircle, { className: "h-5 w-5 text-green-500" });
export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success!',
    description: 'Your operation was successful.',
    shadcnicon: successIcon,
    withCloseButton: true,
    variant: 'filled',
  },
  argTypes: {
    shadcnicon: {
      control: { type: 'boolean' },
      defaultValue: true,
      mapping: {
        true: successIcon,
        false: null,
      },
    },
  },
};

const errorIcon = React.createElement(AlertCircle, { className: "h-5 w-5 text-red-500" });
export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error!',
    description: 'There was an error processing your request.',
    shadcnicon: errorIcon,
    withCloseButton: true,
    variant: 'filled',
  },
  argTypes: {
    shadcnicon: {
      control: { type: 'boolean' },
      defaultValue: true,
      mapping: {
        true: errorIcon,
        false: null,
      },
    },
  },
};

const infoIcon = React.createElement(Info, { className: "h-5 w-5 text-blue-500" });
export const InfoAlert: Story = {
  args: {
    type: 'info',
    title: 'Heads up!',
    description: 'This is an informational alert.',
    shadcnicon: infoIcon,
    withCloseButton: true,
    variant: 'filled',
  },
  argTypes: {
    shadcnicon: {
      control: { type: 'boolean' },
      defaultValue: true,
      mapping: {
        true: infoIcon,
        false: null,
      },
    },
  },
};

const warningIcon = React.createElement(AlertCircle, { className: "h-5 w-5 text-yellow-500" });
export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning!',
    description: 'This is a warning alert.',
    shadcnicon: warningIcon,
    withCloseButton: true,
    variant: 'filled',
  },
  argTypes: {
    shadcnicon: {
      control: { type: 'boolean' },
      defaultValue: true,
      mapping: {
        true: warningIcon,
        false: null,
      },
    },
  },
};