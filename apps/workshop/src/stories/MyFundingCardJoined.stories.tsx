import type { Meta, StoryObj } from "@storybook/react";
import { MyFundingCardJoined } from "@repo/ui";

const meta = {
  title: "Example/MyFundingCard/Joined",
  component: MyFundingCardJoined,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof MyFundingCardJoined>;

export default meta;
type Story = StoryObj<typeof MyFundingCardJoined>;

export const Basic: Story = {
  args: {
    title: "모아에게 새로운 발을 선물해주세요",
    nickname: "김모아",
    profileImg: "http://via.placeholder.com/60x60",
    productImg: "http://via.placeholder.com/164x164",
    startDate: "2023.08.01",
    endDate: "2023.08.31",
    deadline: 15,
    progress: "doing",
    fundingAmount: 30000,
    letterCount: 0,
  },
};
