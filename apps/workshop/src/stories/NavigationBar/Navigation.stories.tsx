import type { Meta, StoryObj } from "@storybook/react";

import { ButtonIcon, NavigationBar } from "@repo/ui";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CloseOutlined,
} from "../../../../../packages/ui/src/assets/icons";

const meta: Meta<typeof NavigationBar> = {
  title: "Example/NavigationBar",
  component: NavigationBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  render: (args) => (
    <NavigationBar
      {...args}
      left={"MAMO"}
      right={<ButtonIcon icon={<ArrowRightOutlined />} />}
    ></NavigationBar>
  ),
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  render: (args) => (
    <NavigationBar
      {...args}
      left={<ButtonIcon icon={<ArrowLeftOutlined />} />}
      right={<ButtonIcon icon={<CloseOutlined />} />}
    >
      페이지
    </NavigationBar>
  ),
};
