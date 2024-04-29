import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup } from '@repo/ui';

const meta = {
  title: 'Example/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  args: {
    layout: 'horizontal',
    gap: 'default',
    children: (
      <>
        <Button>버튼</Button>
        <Button>버튼</Button>
      </>
    ),
  },
  argTypes: {},
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Basic: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    layout: 'vertical',
  },
};
