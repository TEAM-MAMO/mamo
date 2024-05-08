import type { Meta, StoryObj } from '@storybook/react';
import { Button, Card, Typography } from '@repo/ui';
import { ArrowRightOutlined } from '../../../../packages/ui/src/assets/icons';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    divider: false,
    borderless: true,
    rounded: false,
  },
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

const CardTemplate: Story = {
  render: ({ children, ...args }) => (
    <div style={{ width: 375 }}>
      <Card {...args}>{children}</Card>
    </div>
  ),
};

export const Basic: Story = {
  ...CardTemplate,
  args: {
    divider: true,
    children: (
      <>
        <Card.Header extra={<ArrowRightOutlined />}>header</Card.Header>
        <Card.Content>
          <Card.ImageBox>
            <img src="http://via.placeholder.com/375x375" alt="" />
          </Card.ImageBox>
          <Card.Information>
            <Typography.Text>모아에게 새로운 발을 선물해주세요</Typography.Text>
            <Typography.Foot>모아에게 새로운 발을 선물해주세요</Typography.Foot>
          </Card.Information>
        </Card.Content>
        <Card.Footer>
          <Button size="small" block>
            편지함
          </Button>
        </Card.Footer>
      </>
    ),
  },
};

export const Simply: Story = {
  ...CardTemplate,
  args: {
    children: (
      <Card.Content size="small" extra={<ArrowRightOutlined />}>
        <Card.ImageBox size="small">
          <img src="http://via.placeholder.com/375x375" alt="" />
        </Card.ImageBox>
        <Card.Information>
          <Typography.Text>모아에게 새로운 발을 선물해주세요</Typography.Text>
          <Typography.Foot>모아에게 새로운 발을 선물해주세요</Typography.Foot>
        </Card.Information>
      </Card.Content>
    ),
  },
};

export const Grid: Story = {
  render: ({ children, ...args }) => (
    <div style={{ width: 164 }}>
      <Card {...args}>{children}</Card>
    </div>
  ),
  args: {
    children: (
      <Card.Grid>
        <Card.ImageBox size="full">
          <img src="http://via.placeholder.com/375x375" alt="" />
        </Card.ImageBox>
        <Card.Information>
          <Typography.Caption>장마철 출근길도 뽀송</Typography.Caption>
        </Card.Information>
      </Card.Grid>
    ),
  },
};

export const Custom: Story = {
  render: ({ children, ...args }) => (
    <div style={{ width: 300 }}>
      <Card {...args}>{children}</Card>
    </div>
  ),
  args: {
    borderless: false,
    rounded: true,
    children: (
      <>
        <Card.ImageBox size="full" rounded={false}>
          <img src="http://via.placeholder.com/375x375" />
        </Card.ImageBox>
        <Card.Content size="large">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dolore fugiat
          obcaecati libero non dolorem commodi temporibus incidunt sequi sint neque
          dolores at sit quisquam deserunt, magnam, atque aperiam aut.!
        </Card.Content>
      </>
    ),
  },
};
