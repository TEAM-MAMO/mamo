import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@repo/ui';

const meta = {
  title: 'Example/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    bolder: false,
  },
};

export const Bolder: Story = {
  args: {
    bolder: true,
  },
};
