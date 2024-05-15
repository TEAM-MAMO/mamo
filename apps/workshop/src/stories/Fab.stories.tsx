import type { Meta, StoryObj } from "@storybook/react";
import { Fab } from "@repo/ui";
import { PlusOutlined } from "../../../../packages/ui/src/assets/icons";

const meta = {
  title: "Example/Fab",
  component: Fab,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    shape: "circle",
    label: "펀딩 개설",
    icon: <PlusOutlined />,
  },
  argTypes: {
    shape: {
      control: "select",
      options: ["circle", "capsule"],
      description: "버튼의 모양을 설정합니다.",
    },
  },
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof Fab>;

const FabTemplate: Story = {
  render: ({ label, ...arg }) => {
    return (
      <div style={{ transform: "translate(0)", height: "100px" }}>
        <Fab label={label} {...arg} />
      </div>
    );
  },
};

export const Basic: Story = {
  ...FabTemplate,
};

export const Capsule: Story = {
  ...FabTemplate,
  args: {
    shape: "capsule",
  },
};
