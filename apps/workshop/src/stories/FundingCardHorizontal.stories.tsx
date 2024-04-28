import type { Meta, StoryObj } from "@storybook/react";
import { FundingCardHorizontal } from "@repo/ui";

const meta = {
  title: "Example/FundingCard/Horizontal",
  component: FundingCardHorizontal,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof FundingCardHorizontal>;

export default meta;
type Story = StoryObj<typeof FundingCardHorizontal>;

export const Basic: Story = {
  args: {
    title: "한마음 아이패드 사주기",
    nickname: "한마음",
    profileImg: "http://via.placeholder.com/24x24",
    productImg: "http://via.placeholder.com/60x60",
  },
};
