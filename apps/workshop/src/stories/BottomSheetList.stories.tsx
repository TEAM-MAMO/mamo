import type { Meta, StoryObj } from '@storybook/react';
import { BottomSheet, Button } from '@repo/ui';
import { useState } from 'react';

const { List } = BottomSheet;

const meta = {
  title: 'Example/BottomSheet/List',
  component: List,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof List>;

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
        <List isOpen={isOpen} {...arg} onClose={() => setIsOpen(false)} />
        <Button label="Open" onClick={() => setIsOpen(true)} block />
      </div>
    );
  },
};

export const Basic: Story = {
  ...Template,
  args: {
    menu: [
      { id: '1', title: '메뉴1' },
      { id: '2', title: '메뉴2' },
      { id: '3', title: '메뉴3' },
    ],
  },
};
