import type { Meta, StoryObj } from '@storybook/react';
import { InputSelect } from '@repo/ui';

const meta = {
  title: 'Example/InputSelect',
  component: InputSelect,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof InputSelect>;

export default meta;
type Story = StoryObj<typeof InputSelect>;

const Template: Story = {
  render: ({ label, ...arg }) => {
    return <InputSelect label={label} {...arg} />;
  },
};

export const Basic: Story = {
  ...Template,
  args: {
    label: '라벨',
    placeholder: '년도/월/일',
    helperText: '에러 메시지',
    value: '2023년 8월 31일',
  },
};
