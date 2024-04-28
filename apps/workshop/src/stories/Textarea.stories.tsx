import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@repo/ui";
import { useState } from "react";

const meta = {
  title: "Example/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

const Template: Story = {
  render: ({ label, ...arg }) => {
    const [value, setValue] = useState<string>("");
    return (
      <Textarea
        label={label}
        {...arg}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const Basic: Story = {
  ...Template,
  args: {
    label: "라벨",
    placeholder: "placeholder",
    helperText: "helper text",
  },
};
