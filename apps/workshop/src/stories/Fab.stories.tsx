import type { Meta, StoryObj } from '@storybook/react';
import { Fab } from '@repo/ui';

const meta = {
  title: 'Example/Fab',
  component: Fab,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    type: 'circle',
  },
  argTypes: {
    icon: {
      description: 'Default icon: "PlusOutlined"',
    },
  },
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof Fab>;

const FabTemplate: Story = {
  render: ({ label, ...arg }) => {
    return (
      <div style={{ transform: 'translate(0)', height: '100px' }}>
        <Fab label={label} {...arg} />
      </div>
    );
  },
};

export const Basic: Story = {
  ...FabTemplate,
  args: {
    label: '펀딩 개설',
  },
};

export const Capsule: Story = {
  ...FabTemplate,
  args: {
    type: 'capsule',
    label: '펀딩 개설',
  },
};
