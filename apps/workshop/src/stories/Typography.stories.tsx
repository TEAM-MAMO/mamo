import { Typography } from "@repo/ui";
import type { Meta, StoryObj } from "@storybook/react";

const { Heading, Text, Caption, Foot } = Typography;

const meta = {
  title: "Example/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof Typography>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <Heading level={1}>Display 1</Heading>
        <Heading level={2}>Heading 1</Heading>
        <Heading level={2} strong={false}>
          Heading 2
        </Heading>
        <Heading level={3}>Sub Heading 1</Heading>
        <Heading level={3} strong={false}>
          Sub Heading 2
        </Heading>
        <Heading level={4}>Title 1</Heading>
        <br />
        <Text level={1}>
          Text 1 마모가 여러분의 마음을 소중하게 전달하고 있어요
        </Text>
        <Text level={2}>
          Text 2 마모가 여러분의 마음을 소중하게 전달하고 있어요
        </Text>
        <Text level={3}>
          Text 3 마모가 여러분의 마음을 소중하게 전달하고 있어요
        </Text>

        <br />
        <Caption level={1}>
          Caption 1 마모가 여러분의 마음을 소중하게 전달하고 있어요
        </Caption>
        <Caption level={2}>
          Caption 2 마모가 여러분의 마음을 소중하게 전달하고 있어요
        </Caption>
        <Caption level={3}>
          Caption 3 마모가 여러분의 마음을 소중하게 전달하고 있어요
        </Caption>
        <Caption level={4}>
          Caption 4 마모가 여러분의 마음을 소중하게 전달하고 있어요
        </Caption>

        <br />
        <Foot level={1}>
          Foot 1 마모가 여러분의 마음을 소중하게 전달하고 있어요
        </Foot>
        <Foot level={2}>
          Foot 2 마모가 여러분의 마음을 소중하게 전달하고 있어요
        </Foot>
        <Foot level={3}>
          Foot 3 마모가 여러분의 마음을 소중하게 전달하고 있어요
        </Foot>
      </>
    ),
  },
};
