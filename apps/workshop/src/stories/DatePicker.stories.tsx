import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "@repo/ui";

const meta = {
  title: "Example/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Basic: Story = {
  args: {},
};
