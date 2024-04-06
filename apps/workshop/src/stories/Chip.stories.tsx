import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@repo/ui';

const meta = {
  title: 'Example/Chip',
  component: Chip,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: '라벨',
    primary: false,
  },
};

export const Primary: Story = {
  args: {
    label: '라벨',
    primary: true,
  },
};
