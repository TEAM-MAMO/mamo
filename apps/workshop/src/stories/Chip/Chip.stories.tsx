import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "@repo/ui";
import { PlusOutlined } from "@repo/ui/icons";

const meta = {
  title: "COMPONENTS/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    primary: false,
    label: "라벨",
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    primary: true,
  },
};

export const WithIcon: Story = {
  args: {
    icon: <PlusOutlined />,
  },
};
