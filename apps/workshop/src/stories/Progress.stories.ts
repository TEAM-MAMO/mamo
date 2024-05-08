import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from '@repo/ui';

const meta = {
  title: 'Example/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    primary: false,
  },
  argTypes: {
    percent: {
      description: '진행률(퍼센트)를 설정합니다.',
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    percent: 30,
  },
};

export const Primary: Story = {
  args: {
    percent: 30,
    primary: true,
  },
};
