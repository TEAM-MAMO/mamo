import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "@repo/ui";

const meta: Meta<typeof Accordion> = {
  title: "Example/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  render: (args) => (
    <Accordion style={{ width: "375px" }} {...args}>
      <Accordion.Item>
        <Accordion.Trigger top={<div>답변완료 2024.02.23 | 삭제</div>}>
          펀딩 취소는 어떻게 하나요?
        </Accordion.Trigger>
        <Accordion.Content>
          <Accordion.Panel>
            안녕하세요. 2023년 7월 1월에 개설한 ‘유주를 위한 아이패드’ 펀딩
            개설을 취소하고 싶어요. 마이페이지를 찾아도 취소하는 방법이 없네요.
            취소 방법 알려주세요.
          </Accordion.Panel>
          <Accordion.Panel title="답변">
            {
              "개설한 펀딩은 ‘마이페이지 > 개설한 펀딩 > 펀딩 상세내역'에서 취소가 가능합니다.  단, 펀딩 참여자가 1명 이상 존재할 경우, 개설한 펀딩을 취소가 불가능하다는 점 양해부탁드립니다."
            }
          </Accordion.Panel>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger top={<div>등록완료 2023.07.19 | 삭제</div>}>
          펀딩 취소는 어떻게 하나요?
        </Accordion.Trigger>
        <Accordion.Content>
          <Accordion.Panel>
            안녕하세요. 2023년 7월 1월에 개설한 ‘유주를 위한 아이패드’ 펀딩
            개설을 취소하고 싶어요. 마이페이지를 찾아도 취소하는 방법이 없네요.
            취소 방법 알려주세요.
          </Accordion.Panel>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};
