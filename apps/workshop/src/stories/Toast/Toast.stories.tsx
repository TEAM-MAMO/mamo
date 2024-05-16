import type { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  Toast,
  ToastContainer,
  ToastProvider,
  useToast,
} from "@repo/ui";

const meta = {
  title: "COMPONENTS/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof Toast>;

const Template = () => {
  const showToast = useToast();
  return <Button onClick={() => showToast("Toast Message")}>Show Toast</Button>;
};

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <ToastContainer />
      <Template />
    </ToastProvider>
  ),
};
