import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@repo/ui';

import { HeartSolid, PlusOutlined } from '../../../../packages/ui/src/assets/icons';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  args: {
    size: 'default',
    block: false,
    primary: false,
    disabled: false,
    borderless: false,
    children: 'Button',
  },
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    primary: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Block: Story = {
  args: {
    block: true,
  },
};

export const Prefix: Story = {
  args: {
    prefix: <PlusOutlined />,
  },
};

export const Suffix: Story = {
  args: {
    suffix: <HeartSolid />,
  },
};
