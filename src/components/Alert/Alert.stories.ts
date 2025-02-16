import { Meta, StoryObj } from '@storybook/react';
import Alert, { AlertProps } from './Alert';
import { Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import React from 'react';

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,

};

export default meta;

type Story = StoryObj<typeof Alert>;

const successIcon = React.createElement(CheckCircle);
export const Success: Story = {
    args: {
        type: 'success',
        title: 'Success',
        description: 'You were accepted as an intern!',
        icon: successIcon,
        closeable: true,
        variant: 'filled',
    },
    argTypes: {
        icon: {
            control: { type: 'boolean' },
            defaultValue: true,
            mapping: {
                true: successIcon,
                false: null,
            },
        },
    },
};

const errorIcon = React.createElement(XCircle);
export const Error: Story = {
    args: {
        type: 'error',
        title: 'Error',
        description: 'You were rejected as an intern!',
        icon: errorIcon,
        closeable: true,
        variant: 'filled',
    },
    argTypes: {
        icon: {
            control: { type: 'boolean' },
            defaultValue: true,
            mapping: {
                true: errorIcon,
                false: null,
            },
        },
    },
};

const warningIcon = React.createElement(AlertTriangle);
export const Warning: Story = {
    args: {
        type: 'warning',
        title: 'Warning',
        description: 'The timeline for the submission is running out!',
        icon: warningIcon,
        closeable: true,
        variant: 'filled',
    },
    argTypes: {
        icon: {
            control: { type: 'boolean' },
            defaultValue: true,
            mapping: {
                true: warningIcon,
                false: null,
            },
        },
    },
};

const infoIcon = React.createElement(Info);
export const Information: Story = {
    args: {
        type: 'info',
        title: 'Info',
        description: 'You can always e-mail Mr.Zeneli if you have any questions!',
        icon: infoIcon,
        closeable: true,
        variant: 'filled',
    },
    argTypes: {
        icon: {
            control: { type: 'boolean' },
            defaultValue: true,
            mapping: {
                true: infoIcon,
                false: null,
            },
        },
    },
};