import type { Meta, StoryObj } from '@storybook/react';

import { ButtonStory } from './Button';

const meta = {
  title: 'Example/Button',
  component: ButtonStory,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof ButtonStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Button',
    size: 'default',
    block: false,
    primary: false,
    disabled: false,
  },
};

export const Normal: Story = {
  args: {
    label: 'Button',
    size: 'default',
    block: false,
    primary: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    size: 'default',
    block: false,
    primary: false,
    disabled: true,
  },
};

export const Block: Story = {
  args: {
    label: 'Button',
    size: 'default',
    block: true,
    primary: false,
    disabled: false,
  },
};
