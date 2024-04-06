import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@repo/ui';

import {
  HeartSolidPrimary,
  PlusOutlined,
} from '../../../../packages/ui/src/assets/icons';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Button',
    size: 'default',
    block: false,
    primary: false,
    disabled: false,
    borderless: false,
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

export const PrefixIcon: Story = {
  args: {
    label: 'Button',
    size: 'default',
    primary: false,
    disabled: false,
    prefixIcon: <PlusOutlined />,
  },
};

export const SuffixIcon: Story = {
  args: {
    label: 'Button',
    size: 'default',
    primary: false,
    disabled: false,
    suffixIcon: <HeartSolidPrimary />,
  },
};
