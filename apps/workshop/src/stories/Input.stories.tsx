import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@repo/ui';
import { useState } from 'react';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

const Template: Story = {
  render: ({ label, ...arg }) => {
    const [value, setValue] = useState<string>('');
    return (
      <Input
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
    placeholder: 'placeholder',
    helperText: 'helper text...',
    showCount: true,
    allowClear: true,
  },
};
