import type { Meta, StoryObj } from "@storybook/react";
import { MyFundingCardOpened } from "@repo/ui";

const meta = {
  title: "Example/MyFundingCard/Opened",
  component: MyFundingCardOpened,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof MyFundingCardOpened>;

export default meta;
type Story = StoryObj<typeof MyFundingCardOpened>;

export const Basic: Story = {
  args: {
    title: "한마음 아이패드 사주기",
    productImg: "http://via.placeholder.com/164x164",
    startDate: "2023.08.01",
    endDate: "2023.08.31",
    fundingRate: 55,
    deadline: 15,
    progress: "doing",
    fundingAmount: 1000690000,
    goalAmount: 1001249000,
    letterCount: 0,
  },
};
