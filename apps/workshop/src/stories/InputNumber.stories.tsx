import type { Meta, StoryObj } from '@storybook/react';
import { InputNumber } from '@repo/ui';
import { useState } from 'react';

const meta = {
  title: 'Example/InputNumber',
  component: InputNumber,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof InputNumber>;

const Template: Story = {
  render: ({ label, ...arg }) => {
    const [value, setValue] = useState<string>('');
    return (
      <InputNumber
        label={label}
        {...arg}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const Basic: Story = {
  ...Template,
  args: {
    label: '라벨',
    placeholder: '얼마나 전할까요?',
    helperText: '에러 메시지',
  },
};
