import type { Meta, StoryObj } from '@storybook/react';
import { Button, DatePicker } from '@repo/ui';
import { useState } from 'react';

const meta = {
  title: 'Example/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Basic: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div style={{ height: '350px' }}>
        <DatePicker>
          <DatePicker.Trigger>
            <Button>DatePicker Open</Button>
            {date && date.toString()}
          </DatePicker.Trigger>
          <DatePicker.Panel
            onClickDay={(value) => {
              setDate(value);
            }}
          />
        </DatePicker>
      </div>
    );
  },
};
