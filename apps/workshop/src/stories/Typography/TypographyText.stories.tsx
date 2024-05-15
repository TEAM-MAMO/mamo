import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@repo/ui";
const { Text } = Typography;

const meta = {
  title: "COMPONENTS/Typography/Text",
  component: Text,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      description: `
level 1: Body Text 1\n
level 2: Body Text 2\n
level 3: Body Text 3\n
level 4: Body Text 4
      `,
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text1: Story = {
  args: {
    level: 1,
    inline: false,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};

export const Text2: Story = {
  args: {
    level: 2,
    inline: false,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};

export const Text3: Story = {
  args: {
    level: 3,
    inline: false,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};
