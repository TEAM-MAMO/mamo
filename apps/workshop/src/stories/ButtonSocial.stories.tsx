import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSocial } from '@repo/ui';

const meta = {
  title: 'Example/ButtonSocial',
  component: ButtonSocial,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof ButtonSocial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    social: 'kakao',
  },
};
