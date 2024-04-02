import type { Meta, StoryObj } from '@storybook/react';
import { BottomSheet, Button } from '@repo/ui';
import { useState } from 'react';
const { Confirm } = BottomSheet;

const meta = {
  title: 'Example/BottomSheet/Confirm',
  component: Confirm,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    okText: '버튼',
    cancelText: '버튼',
  },
  argTypes: {},
} satisfies Meta<typeof Confirm>;

export default meta;
type Story = StoryObj<typeof Confirm>;

const Template: Story = {
  render: (arg) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div
        style={{
          width: 375,
          height: 400,
          margin: '0 auto',
          transform: 'translate(0)',
        }}
      >
        <Confirm isOpen={isOpen} {...arg} onClose={() => setIsOpen(false)} />
        <Button label="Open" onClick={() => setIsOpen(true)} block />
      </div>
    );
  },
};

export const Basic: Story = {
  ...Template,
  args: {
    title: '텍스트',
    description: '설명',
  },
};
