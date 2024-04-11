import type { Meta, StoryObj } from '@storybook/react';
import { LetterCard } from '@repo/ui';

const meta = {
  title: 'Example/LetterCard',
  component: LetterCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof LetterCard>;

export default meta;
type Story = StoryObj<typeof LetterCard>;

const Template: Story = {
  render: (arg) => {
    return (
      <div style={{ width: '300px' }}>
        <LetterCard {...arg} />
      </div>
    );
  },
};

export const Basic: Story = {
  ...Template,
  args: {
    nickname: '바프준비중',
    coverImg: 'http://via.placeholder.com/350x350',
    profileImg: 'http://via.placeholder.com/32x32',
    content:
      '지원아 생일 축하해! 너의 매일매일에 행복이 가득하길 바라고, 항상 좋은 일만 가득하길 기원해. 나한테 소중한 사람인 거 알지? 생파날 샴페인 터트리고 화끈하게 놀자, 그때 봐!',
    date: 1712845475674,
  },
};
