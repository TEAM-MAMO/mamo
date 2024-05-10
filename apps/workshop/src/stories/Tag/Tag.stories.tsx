import type { Meta, StoryObj } from "@storybook/react";

import { Tag, TagProps } from "@repo/ui";

type Variant = "primary" | "secondary" | "default";
const variantOptions: Variant[] = ["primary", "secondary", "default"];

const meta = {
  title: "Example/Tag",
  component: Tag,
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
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

const Template = (args: TagProps) => <Tag {...args}>텍스트</Tag>;

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "10px" }}>
      {variantOptions.map((variant) => (
        <Template {...args} key={variant} variant={variant} />
      ))}
    </div>
  ),
};
