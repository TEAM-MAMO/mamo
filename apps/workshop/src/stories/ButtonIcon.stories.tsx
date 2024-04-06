import type { Meta, StoryObj } from '@storybook/react';
import { ButtonIcon } from '@repo/ui';
import { ArrowRightOutlined } from '../../../../packages/ui/src/assets/icons';

const meta = {
  title: 'Example/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    icon: <ArrowRightOutlined />,
    size: 'default',
  },
};
