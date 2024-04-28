/* eslint-disable @next/next/no-img-element */
import React from "react";
import clsx from "clsx";
import { elapsedTime } from "../../utils";
import { Typography } from "../Typography/Typography";
import * as s from "./letterCard.css";

const { Caption, Text, Foot } = Typography;

export interface LetterCardProps extends React.HTMLAttributes<HTMLDivElement> {
  nickname: string;
  coverImg: string;
  profileImg: string;
  content: string;
  date: number;
}

export const LetterCard = React.forwardRef<HTMLDivElement, LetterCardProps>(
  (
    { nickname, coverImg, profileImg, content, date, className, ...props },
    ref,
  ) => {
    return (
      <div ref={ref} className={clsx(s.cardStyle, className)} {...props}>
        <div className={s.coverStyle}>
          <img className={s.coverImgStyle} src={coverImg} alt="letter cover" />
        </div>
        <div>
          <div className={s.headerStyle}>
            <img className={s.profileStyle} src={profileImg} alt={nickname} />
            <div className={s.userStyle}>
              <Caption level={2}>from.</Caption>
              <Caption className={s.nicknameStyle}>{nickname}</Caption>
            </div>
            <div className={s.dateStyle}>
              <Foot level={2}>{elapsedTime(date)}</Foot>
            </div>
          </div>
          <div className={s.letterStyle}>
            <Text level={3}>{content}</Text>
          </div>
        </div>
      </div>
    );
  },
);
