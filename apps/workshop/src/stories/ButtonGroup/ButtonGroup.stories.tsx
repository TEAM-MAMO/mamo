import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonGroup } from "@repo/ui";

const meta = {
  title: "COMPONENTS/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
  args: {
    layout: "horizontal",
    gap: "default",
    children: (
      <>
        <Button>버튼</Button>
        <Button>버튼</Button>
      </>
    ),
  },
  argTypes: {
    layout: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    gap: {
      control: "select",
      options: ["xlarge", "small", "default", "large"],
      description: "간격의 사이즈를 설정합니다.",
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Horizontal: Story = {
  args: {},
};

export const Vertical: Story = {
  args: {
    layout: "vertical",
  },
};
