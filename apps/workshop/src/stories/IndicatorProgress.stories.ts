import type { Meta, StoryObj } from '@storybook/react';

import { IndicatorProgress } from '@repo/ui';

const meta = {
  title: 'Example/IndicatorProgress',
  component: IndicatorProgress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    step: {
      description: '현재 단계',
    },
    maxStep: {
      description: '최대 단계',
    },
  },
} satisfies Meta<typeof IndicatorProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    step: 3,
    maxStep: 5,
  },
};
