import type { Meta, StoryObj } from "@storybook/react";

import { NavigationBar, Typography } from "@repo/ui";

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "../../../../../packages/ui/src/assets/icons";

const meta: Meta<typeof NavigationBar> = {
  title: "Example/NavigationBar",
  component: NavigationBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Basic: Story = {
  render: () => (
    <NavigationBar
      style={{ width: "375px" }}
      left={<ArrowLeftOutlined />}
      right={<ArrowRightOutlined />}
    >
      <Typography.Heading level={4}>텍스트</Typography.Heading>
    </NavigationBar>
  ),
};
