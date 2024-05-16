import { List, ListItem } from "@repo/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "COMPONENTS/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof List>;
const Items = [
  { id: "1", firstName: "John", lastName: "Doe" },
  { id: "2", firstName: "Jane", lastName: "Doe" },
  { id: "3", firstName: "Gildong", lastName: "Hong" },
];

const Item = ({ item }: { item: (typeof Items)[0] }) => {
  return (
    <ListItem>
      <div>{item.firstName}</div>
      <div>{item.lastName}</div>
    </ListItem>
  );
};

export default meta;
type Story = StoryObj<typeof List>;

export const ListExample: Story = {
  render: ({ ...args }) => {
    return (
      <List
        {...args}
        items={Items}
        renderItem={(item) => <Item key={item.id} item={item} />}
      />
    );
  },
};
