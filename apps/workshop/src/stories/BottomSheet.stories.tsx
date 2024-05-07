import type { Meta, StoryObj } from '@storybook/react';
import { BottomSheet, Button } from '@repo/ui';
import { CloseOutlined } from '../../../../packages/ui/src/assets/icons';

const meta = {
  title: 'Example/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof BottomSheet>;

const Template: Story = {
  render: (arg) => {
    return (
      <div
        style={{
          transform: 'translate(0)',
          height: '700px',
          width: '375px',
          background: '#F6F9FC',
        }}
      >
        <BottomSheet {...arg}>
          <BottomSheet.Trigger>
            <Button>Open</Button>
          </BottomSheet.Trigger>
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
          <Button primary block>
            버튼
          </Button>
          <Button block>버튼</Button>
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
        <BottomSheet.Header closeIcon={<CloseOutlined />} />
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iusto beatae ipsa
          veritatis sed, aut libero repellat aperiam voluptas porro ex voluptatum? Fuga
          ipsum quidem, mollitia ut doloremque quisquam harum. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Sunt iusto beatae ipsa veritatis sed, aut libero
          repellat aperiam voluptas porro ex voluptatum? Fuga ipsum quidem, mollitia ut
          doloremque quisquam harum. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sunt iusto beatae ipsa veritatis sed, aut libero repellat aperiam voluptas
          porro ex voluptatum? Fuga ipsum quidem, mollitia ut doloremque quisquam harum.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iusto beatae ipsa
          veritatis sed, aut libero repellat aperiam voluptas porro ex voluptatum? Fuga
          ipsum quidem, mollitia ut doloremque quisquam harum. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Sunt iusto beatae ipsa veritatis sed, aut libero
          repellat aperiam voluptas porro ex voluptatum? Fuga ipsum quidem, mollitia ut
          doloremque quisquam harum. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sunt iusto beatae ipsa veritatis sed, aut libero repellat aperiam voluptas
          porro ex voluptatum? Fuga ipsum quidem, mollitia ut doloremque quisquam harum.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iusto beatae ipsa
          veritatis sed, aut libero repellat aperiam voluptas porro ex voluptatum? Fuga
          ipsum quidem, mollitia ut doloremque quisquam harum. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Sunt iusto beatae ipsa veritatis sed, aut libero
          repellat aperiam voluptas porro ex voluptatum? Fuga ipsum quidem, mollitia ut
          doloremque quisquam harum. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sunt iusto beatae ipsa veritatis sed, aut libero repellat aperiam voluptas
          porro ex voluptatum? Fuga ipsum quidem, mollitia ut doloremque quisquam harum.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iusto beatae ipsa
          veritatis sed, aut libero repellat aperiam voluptas porro ex voluptatum? Fuga
          ipsum quidem, mollitia ut doloremque quisquam harum. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Sunt iusto beatae ipsa veritatis sed, aut libero
          repellat aperiam voluptas porro ex voluptatum? Fuga ipsum quidem, mollitia ut
          doloremque quisquam harum. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sunt iusto beatae ipsa veritatis sed, aut libero repellat aperiam voluptas
          porro ex voluptatum? Fuga ipsum quidem, mollitia ut doloremque quisquam harum.
        </BottomSheet.Body>
      </>
    ),
  },
};
