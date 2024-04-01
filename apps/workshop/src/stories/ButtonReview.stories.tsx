import type { Meta, StoryObj } from '@storybook/react';
import { ButtonReview } from '@repo/ui';

const meta = {
  title: 'Example/ButtonReview',
  component: ButtonReview,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    selected: false,
  },
} satisfies Meta<typeof ButtonReview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    state: 'smile',
  },
};

export const Selected: Story = {
  args: {
    state: 'smile',
    selected: true,
  },
};
