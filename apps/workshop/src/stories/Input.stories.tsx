import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@repo/ui";
import { useState } from "react";
import { DeleteSolid } from "../../../../packages/ui/src/assets/icons";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    label: "라벨",
    placeholder: "얼마나 전할까요?",
    helperText: "에러 메세지",
    state: "valid",
    maxLength: 30,
    showCount: false,
  },
  argTypes: {
    label: {
      description: "label 텍스트를 설정합니다.",
    },
    helperText: {
      description: "가이드 문구를 제공합니다.",
    },
    state: {
      control: "select",
      options: ["valid", "error"],
      description: "input의 상태를 설정합니다.",
    },
    maxLength: {
      description: "최대 글자수를 설정합니다.",
    },
    showCount: {
      description: "글자 수 및 최대 글자수를 표시합니다.",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

const Template: Story = {
  render: ({ label, ...arg }) => {
    const [value, setValue] = useState<string>("");
    return (
      <Input
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...arg}
      />
    );
  },
};

export const Basic: Story = {
  ...Template,
  args: {
    showCount: true,
  },
};
export const Suffix: Story = {
  ...Template,
  args: {
    suffix: <DeleteSolid />,
  },
};
