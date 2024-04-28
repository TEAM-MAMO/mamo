import type { Meta, StoryObj } from "@storybook/react";
import { ButtonVariable } from "@repo/ui";
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from "../../../../packages/ui/src/assets/icons";

const meta = {
  title: "Example/ButtonVariable",
  component: ButtonVariable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ButtonVariable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "버튼",
    size: "default",
  },
};
export const PrefixIcon: Story = {
  args: {
    label: "버튼",
    icon: <ArrowLeftOutlined />,
    size: "default",
  },
};
export const SuffixIcon: Story = {
  args: {
    label: "버튼",
    icon: <ArrowRightOutlined />,
    iconType: "suffix",
    size: "default",
  },
};
