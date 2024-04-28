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

export const Primary: Story = {
  render: () => (
    <NavigationBar left={<ArrowLeftOutlined />} right={<ArrowRightOutlined />}>
      <Typography.Heading>텍스트</Typography.Heading>
    </NavigationBar>
  ),
};
