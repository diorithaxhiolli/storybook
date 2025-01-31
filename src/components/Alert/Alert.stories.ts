// meta used to define metadata of story (title, component)
// story used to define individual stories (primary, secondary, etc.)
import { Meta, StoryObj } from '@storybook/react';
import Alert, { AlertProps } from './Alert';

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert', //appears in the sidebar of the Storybook app
    component: Alert, //specifies the component that this story is about
}

export default meta

type Story = StoryObj<typeof Alert> //defines a story

export const Success: Story = {
    //args contains props of the component
    args: { 
        type: 'success',
        title: 'Success',
        description: 'You were accepted as an intern!'
    }
}

export const Error: Story = {
    args: {
        type: 'error',
        title: 'Error',
        description: 'You were rejected as an intern!'
    }
}

export const Warning: Story = {
    args: {
        type: 'warning',
        title: 'Warning',
        description: 'The timeline for the submission is running out!'
    }
}

export const Info: Story = {
    args: {
        type: 'info',
        title: 'Info',
        description: 'You can always e-mail Mr.Zeneli if you have any questions!'
    }
}