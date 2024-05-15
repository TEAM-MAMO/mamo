import type { Meta, StoryObj } from "@storybook/react";
import { Button, Tooltip, TooltipProps } from "@repo/ui";

type Variant = "primary" | "secondary";
const variantOptions: Variant[] = ["primary", "secondary"];

type Size = "sm" | "md";
const sizeOptions: Size[] = ["sm", "md"];

type Placement = "left" | "center" | "right";
const placementOptions: Placement[] = ["left", "center", "right"];

type Close = boolean;
const closeOptions: Close[] = [true, false];

const meta: Meta<typeof Tooltip> = {
  title: "COMPONENTS/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: variantOptions,
      control: { type: "select" },
    },
    size: {
      options: sizeOptions,
      control: { type: "select" },
    },
    placement: {
      options: placementOptions,
      control: { type: "select" },
    },
    close: {
      options: closeOptions,
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

const Template = (args: TooltipProps & { label: string }) => (
  <Tooltip {...args}>
    <Button size="small">Tooltip 버튼</Button>
  </Tooltip>
);

export const Variants: StoryObj<TooltipProps> = {
  render: (args) => (
    <div style={{ display: "flex", gap: "10px" }}>
      {variantOptions.map((variant, index) => (
        <Template
          {...args}
          key={variant}
          variant={variant}
          content={`Tooltip${index + 1}`}
          label={`${variant}`}
        />
      ))}
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "10px" }}>
      {sizeOptions.map((size, index) => (
        <Template
          {...args}
          key={size}
          size={size}
          content={`Tooltip${index + 1}`}
          label={`${size}`}
        />
      ))}
    </div>
  ),
};

export const Placement: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "10px" }}>
      {placementOptions.map((placement, index) => (
        <Template
          {...args}
          key={placement}
          placement={placement}
          content={`Tooltip${index + 1}`}
          label={`${placement}`}
        />
      ))}
    </div>
  ),
};

export const WithClose: Story = {
  render: (args) => (
    <Template {...args} content="Tooltip" label="With Close" close />
  ),
};
