import type { Meta, StoryObj } from "@storybook/react";

import { Badge, BadgeProps } from "@repo/ui";

type Variant = "primary" | "secondary" | "default";
const variantOptions: Variant[] = ["primary", "secondary", "default"];

const meta = {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {
    variant: {
      options: variantOptions,
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

const Template = (args: BadgeProps) => <Badge {...args}>텍스트</Badge>;

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "10px" }}>
      {variantOptions.map((variant) => (
        <Template {...args} key={variant} variant={variant} />
      ))}
    </div>
  ),
};
