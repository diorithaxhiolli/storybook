import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MultiSelect from './Multiselect';

const fetchOptions = async () => {
  return new Promise<{ value: string, label: string }[]>((resolve) =>
    setTimeout(() => resolve([
      { value: "Liverpool", label: "Liverpool" },
      { value: "Arsenal", label: "Arsenal" },
      { value: "Man City", label: "Man City" },
      { value: "Ipswich Town", label: "Ipswich Town" },
    ]), 1000)
  );
};

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  argTypes: {
    disabledOptions: {
      control: 'check',
      options: ["Liverpool", "Arsenal", "Man City", "Ipswich Town"],
    },
    defaultSelected: {
      control: 'check',
      options: ["Liverpool", "Arsenal", "Man City", "Ipswich Town"],
    },
  },
};

export default meta;

export const Default: StoryObj<typeof MultiSelect> = {
  args: {
    options: fetchOptions,
    placeholder: "Select items...",
    isLoading: false,
    onChange: (selected: string[]) => console.log(selected),
    defaultSelected: ["Ipswich Town"], 
    disabledOptions: [],
  },
};

// export const PreSelectedOptions: StoryObj<typeof MultiSelect> = {
//   args: {
//     options: fetchOptions,
//     placeholder: "Select items...",
//     isLoading: false,
//     onChange: (selected: string[]) => console.log(selected),
//     defaultSelected: ["Liverpool", "Man City"],
//     disabledOptions: [],
//   },
// };

// export const DisabledOptions: StoryObj<typeof MultiSelect> = {
//   args: {
//     options: fetchOptions,
//     placeholder: "Select items...",
//     isLoading: false,
//     onChange: (selected: string[]) => console.log(selected),
//     defaultSelected: [],
//     disabledOptions: ["Arsenal", "Ipswich Town"],
//   },
// };
