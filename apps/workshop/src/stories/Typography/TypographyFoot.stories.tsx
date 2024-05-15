import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@repo/ui";
const { Foot } = Typography;

const meta = {
  title: "COMPONENTS/Typography/Foot",
  component: Foot,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      description: `
level 1: Foot Note 1\n
level 2: Foot Note 2\n
level 3: Foot Note 3
      `,
    },
  },
} satisfies Meta<typeof Foot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Foot1: Story = {
  args: {
    level: 1,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};

export const Foot2: Story = {
  args: {
    level: 2,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};

export const Foot3: Story = {
  args: {
    level: 3,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};
