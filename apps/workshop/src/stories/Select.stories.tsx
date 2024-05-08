import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@repo/ui';

const meta = {
  title: 'Example/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    label: '라벨',
    state: 'valid',
    placeholder: '년도/월/일',
    helperText: '에러 메시지',
    arrowType: 'right',
  },
  argTypes: {
    label: {
      description: 'label 텍스트를 설정합니다.',
    },
    helperText: {
      description: '가이드 문구를 제공합니다.',
    },
    state: {
      control: 'select',
      options: ['valid', 'error'],
      description: '상태를 설정합니다.',
    },
    arrowType: {
      control: 'select',
      options: ['down', 'right'],
      description: '화살표 아이콘 타입을 설정합니다.',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const Template: Story = {
  render: ({ label, ...arg }) => {
    return <Select label={label} {...arg} />;
  },
};

export const Basic: Story = {
  ...Template,
  args: {
    value: '2023년 8월 31일',
  },
};
