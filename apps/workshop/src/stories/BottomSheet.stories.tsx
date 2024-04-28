import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet, Button } from "@repo/ui";

const meta = {
  title: "Example/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof BottomSheet>;

const Template: Story = {
  render: (arg) => {
    return (
      <div
        style={{ transform: "translate(0)", height: "700px", width: "375px" }}
      >
        <BottomSheet {...arg}>
          <BottomSheet.Trigger />
          <BottomSheet.Content>{arg.children}</BottomSheet.Content>
        </BottomSheet>
      </div>
    );
  },
};

export const Confirm: Story = {
  ...Template,
  args: {
    children: (
      <>
        <BottomSheet.Confirm title="타이틀" description="설명" />
        <BottomSheet.Footer>
          <Button label="버튼" primary block />
          <Button label="버튼" block />
        </BottomSheet.Footer>
      </>
    ),
  },
};

export const List: Story = {
  ...Template,
  args: {
    children: (
      <>
        <BottomSheet.Header />
        <BottomSheet.Menu>
          <BottomSheet.Item>메뉴 1</BottomSheet.Item>
          <BottomSheet.Item>메뉴 2</BottomSheet.Item>
          <BottomSheet.Item>메뉴 3</BottomSheet.Item>
        </BottomSheet.Menu>
      </>
    ),
  },
};

export const Custom: Story = {
  ...Template,
  args: {
    children: (
      <>
        <BottomSheet.Header title="약관동의" />
        <BottomSheet.Body>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iusto
          beatae ipsa veritatis sed, aut libero repellat aperiam voluptas porro
          ex voluptatum? Fuga ipsum quidem, mollitia ut doloremque quisquam
          harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          iusto beatae ipsa veritatis sed, aut libero repellat aperiam voluptas
          porro ex voluptatum? Fuga ipsum quidem, mollitia ut doloremque
          quisquam harum. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sunt iusto beatae ipsa veritatis sed, aut libero repellat
          aperiam voluptas porro ex voluptatum? Fuga ipsum quidem, mollitia ut
          doloremque quisquam harum. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Sunt iusto beatae ipsa veritatis sed, aut libero
          repellat aperiam voluptas porro ex voluptatum? Fuga ipsum quidem,
          mollitia ut doloremque quisquam harum. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Sunt iusto beatae ipsa veritatis sed,
          aut libero repellat aperiam voluptas porro ex voluptatum? Fuga ipsum
          quidem, mollitia ut doloremque quisquam harum. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Sunt iusto beatae ipsa veritatis
          sed, aut libero repellat aperiam voluptas porro ex voluptatum? Fuga
          ipsum quidem, mollitia ut doloremque quisquam harum. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Sunt iusto beatae ipsa
          veritatis sed, aut libero repellat aperiam voluptas porro ex
          voluptatum? Fuga ipsum quidem, mollitia ut doloremque quisquam harum.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iusto
          beatae ipsa veritatis sed, aut libero repellat aperiam voluptas porro
          ex voluptatum? Fuga ipsum quidem, mollitia ut doloremque quisquam
          harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          iusto beatae ipsa veritatis sed, aut libero repellat aperiam voluptas
          porro ex voluptatum? Fuga ipsum quidem, mollitia ut doloremque
          quisquam harum. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sunt iusto beatae ipsa veritatis sed, aut libero repellat
          aperiam voluptas porro ex voluptatum? Fuga ipsum quidem, mollitia ut
          doloremque quisquam harum. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Sunt iusto beatae ipsa veritatis sed, aut libero
          repellat aperiam voluptas porro ex voluptatum? Fuga ipsum quidem,
          mollitia ut doloremque quisquam harum. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Sunt iusto beatae ipsa veritatis sed,
          aut libero repellat aperiam voluptas porro ex voluptatum? Fuga ipsum
          quidem, mollitia ut doloremque quisquam harum.
        </BottomSheet.Body>
      </>
    ),
  },
};
