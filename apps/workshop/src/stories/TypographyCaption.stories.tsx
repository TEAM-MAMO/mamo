import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@repo/ui";
const { Caption } = Typography;

const meta = {
  title: "Example/Typography/Caption",
  component: Caption,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      description: `
level 1: Caption 1\n
level 2: Caption 2\n
level 3: Caption 3\n
level 4: Caption 4
      `,
    },
  },
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Caption1: Story = {
  args: {
    level: 1,
    inline: false,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};

export const Caption2: Story = {
  args: {
    level: 2,
    inline: false,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};

export const Caption3: Story = {
  args: {
    level: 3,
    inline: false,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};

export const Caption4: Story = {
  args: {
    level: 4,
    inline: false,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};
