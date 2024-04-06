import { IndicatorFunding } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/IndicatorFunding',
  component: IndicatorFunding,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    amount: {
      description: '현재 펀딩 금액',
    },
    goalAmount: {
      description: '목표 펀딩 금액',
    },
  },
} satisfies Meta<typeof IndicatorFunding>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    amount: 690000,
    percent: 55,
    goalAmount: 1249000,
  },
};
