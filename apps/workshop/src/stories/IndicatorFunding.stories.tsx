import type { Meta, StoryObj } from '@storybook/react';

import { IndicatorFundingStory as IndicatorFunding } from './IndicatorFunding';

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
    goalAmount: 1249000,
  },
};
