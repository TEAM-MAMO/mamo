import type { Meta, StoryObj } from '@storybook/react';
import { MainVisualCard } from '@repo/ui';

const meta = {
  title: 'Example/MainVisualCard',
  component: MainVisualCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof MainVisualCard>;

export default meta;
type Story = StoryObj<typeof MainVisualCard>;

const Template: Story = {
  render: (arg) => {
    return (
      <div style={{ width: '375px' }}>
        <MainVisualCard {...arg} />
      </div>
    );
  },
};

export const Basic: Story = {
  ...Template,
  args: {
    nickname: '김모아',
    productName: '뉴발란스 305',
    profileImg: 'http://via.placeholder.com/36x36',
    productImages: [
      'http://via.placeholder.com/375x375',
      'http://via.placeholder.com/375x375',
      'http://via.placeholder.com/375x375',
      'http://via.placeholder.com/375x375',
    ],
    rate: 41,
    deadline: 15,
    progress: 'doing',
  },
};
