import type { Meta, StoryObj } from "@storybook/react";
import { InputNumber } from "@repo/ui";
import { useState } from "react";

const meta = {
  title: "Example/InputNumber",
  component: InputNumber,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    label: "라벨",
    placeholder: "얼마나 전할까요?",
    helperText: "에러 메세지",
    state: "valid",
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
    suffix: {
      description: "단위와 같은 구성요소를 추가할 수 있습니다.",
    },
  },
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof InputNumber>;

const Template: Story = {
  render: ({ label, ...arg }) => {
    const [value, setValue] = useState<string>("");
    return (
      <InputNumber
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
};

export const Suffix: Story = {
  ...Template,
  args: { suffix: "원" },
};
