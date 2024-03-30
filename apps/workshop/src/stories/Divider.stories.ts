import type { Meta, StoryObj } from '@storybook/react';

import { DividerStory } from './Divider';

const meta = {
  title: 'Example/Divider',
  component: DividerStory,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DividerStory>;

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
