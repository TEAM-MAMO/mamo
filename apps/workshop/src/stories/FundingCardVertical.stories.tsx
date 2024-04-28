import type { Meta, StoryObj } from "@storybook/react";
import { FundingCardVertical } from "@repo/ui";

const meta = {
  title: "Example/FundingCard/Vertical",
  component: FundingCardVertical,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof FundingCardVertical>;

export default meta;
type Story = StoryObj<typeof FundingCardVertical>;

const Template: Story = {
  render: (arg) => {
    return (
      <div style={{ width: 164 }}>
        <FundingCardVertical {...arg} />
      </div>
    );
  },
};

export const Basic: Story = {
  ...Template,
  args: {
    title: "한마음 아이패드 사주기",
    nickname: "한마음",
    profileImg: "http://via.placeholder.com/24x24",
    productImg: "http://via.placeholder.com/164x164",
    fundingRate: 100,
    progress: "doing",
    deadline: 15,
  },
};

export const Pause: Story = {
  ...Template,
  args: {
    title: "한마음 아이패드 사주기",
    nickname: "한마음",
    profileImg: "http://via.placeholder.com/24x24",
    productImg: "http://via.placeholder.com/164x164",
    fundingRate: 100,
    progress: "pause",
    deadline: 15,
  },
};

export const End: Story = {
  ...Template,
  args: {
    title: "한마음 아이패드 사주기",
    nickname: "한마음",
    profileImg: "http://via.placeholder.com/24x24",
    productImg: "http://via.placeholder.com/164x164",
    fundingRate: 100,
    progress: "end",
    deadline: 15,
  },
};
