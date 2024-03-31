import type { Meta, StoryObj } from '@storybook/react';

import { ButtonStory } from './Button';
import {
  HeartSolidPrimary,
  PlusOutlined,
} from '../../../../packages/ui/src/assets/icons';

const meta = {
  title: 'Example/Button',
  component: ButtonStory,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
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

export const Prefix: Story = {
  args: {
    label: 'Button',
    size: 'default',
    primary: false,
    disabled: false,
    prefix: <PlusOutlined />,
  },
};

export const Suffix: Story = {
  args: {
    label: 'Button',
    size: 'default',
    primary: false,
    disabled: false,
    suffix: <HeartSolidPrimary />,
  },
};
