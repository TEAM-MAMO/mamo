import type { Meta, StoryObj } from "@storybook/react";
import { Button, Select } from "@repo/ui";
import { CloseOutlined } from "@repo/ui/icons";
import { useState } from "react";

const meta = {
  title: "COMPONENTS/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState("");

    return (
      <div
        style={{
          transform: "translate(0)",
          height: "600px",
          width: "375px",
          background: "#F6F9FC",
        }}
      >
        <Select>
          <Select.Trigger>
            <Button block>Select Open</Button>
          </Select.Trigger>
          <Select.OptionList
            title="은행을 선택해주세요"
            closeIcon={<CloseOutlined />}
            onChangeSelected={setSelected}
          >
            <Select.Option value="Option 1">Option 1</Select.Option>
            <Select.Option value="Option 2">Option 2</Select.Option>
            <Select.Option value="Option 3">Option 3</Select.Option>
            <Select.Option value="Option 4">Option 4</Select.Option>
            <Select.Option value="Option 5">Option 5</Select.Option>
            <Select.Option value="Option 6">Option 6</Select.Option>
            <Select.Option value="Option 7">Option 7</Select.Option>
            <Select.Option value="Option 8">Option 8</Select.Option>
            <Select.Option value="Option 9">Option 9</Select.Option>
            <Select.Option value="Option 10">Option 10</Select.Option>
            <Select.Option value="Option 11">Option 11</Select.Option>
            <Select.Option value="Option 12">Option 12</Select.Option>
            <Select.Option value="Option 13">Option 13</Select.Option>
            <Select.Option value="Option 14">Option 14</Select.Option>
          </Select.OptionList>
        </Select>
        {selected && `Select Item: ${selected}`}
      </div>
    );
  },
};
