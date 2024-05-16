import type { Meta, StoryObj } from "@storybook/react";
// import { TypographyHeading as Heading } from './TypographyHeading';
import { Typography } from "@repo/ui";
const { Heading } = Typography;

const meta = {
  title: "COMPONENTS/Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      description: `
level 1: Display 1\n
level 2: Heading 1, Heading 2\n
level 3: SubHeading 1, SubHeading 2\n
level 4: Title 1
      `,
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: {
    level: 1,
    strong: false,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};

export const Heading1: Story = {
  args: {
    level: 2,
    strong: true,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};

export const Heading2: Story = {
  args: {
    level: 2,
    strong: false,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};

export const SubHeading1: Story = {
  args: {
    level: 3,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};

export const SubHeading2: Story = {
  args: {
    level: 3,
    strong: false,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};

export const Title: Story = {
  args: {
    level: 4,
    children: "마모가 여러분의 마음을 소중하게 전달하고 있어요",
  },
};
