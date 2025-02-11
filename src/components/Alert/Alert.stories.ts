// meta used to define metadata of story (title, component)
// story used to define individual stories (primary, secondary, etc.)
import { Meta, StoryObj } from '@storybook/react';
import Alert, { AlertProps } from './Alert';
import { Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import React from 'react';

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert', //appears in the sidebar of the Storybook app
    component: Alert, //specifies the component that this story is about
}

export default meta

type Story = StoryObj<typeof Alert> //defines a story

const successIcon = React.createElement(CheckCircle);
export const Success: Story = {
    //args contains props of the components
    args: { 
        type: 'success',
        title: 'Success',
        description: 'You were accepted as an intern!',
        icon:  successIcon,
        closeable: true,
        variant: 'filled', // Default variant
    },
}

const errorIcon = React.createElement(XCircle);
export const Error: Story = {
    args: {
        type: 'error',
        title: 'Error',
        description: 'You were rejected as an intern!',
        icon: errorIcon,
        closeable: true,
        variant: 'filled'
    }
}

const warningIcon = React.createElement(AlertTriangle);
export const Warning: Story = {
    args: {
        type: 'warning',
        title: 'Warning',
        description: 'The timeline for the submission is running out!',
        icon: warningIcon,
        closeable: true,
        variant: 'filled'
    }
}

const infoIcon = React.createElement(Info);
export const Information: Story = {
    args: {
        type: 'info',
        title: 'Info',
        description: 'You can always e-mail Mr.Zeneli if you have any questions!',
        icon: infoIcon,
        closeable: true,
        variant: 'filled'
    }
}