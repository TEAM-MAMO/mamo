/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import FundingRate from '../FundingRate/FundingRate';
import { FundingProgressType, ProgressChip } from '../ProgressChip/ProgressChip';
import { ArrowRightMoreOutlined } from '../../assets/icons';
import { Typography } from '../Typography/Typography';
import * as s from './mainVisualCard.css';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const { Heading } = Typography;

export interface MainVisualCardProps extends React.HTMLAttributes<HTMLDivElement> {
  nickname: string;
  profileImg: string;
  productName: string;
  productImages: string[];
  rate: number;
  deadline: number;
  progress: FundingProgressType;
  onClickUser?: () => void;
  onClickMore?: () => void;
}

export const MainVisualCard = React.forwardRef<HTMLDivElement, MainVisualCardProps>(
  (
    {
      nickname,
      profileImg,
      productName,
      productImages,
      rate,
      deadline,
      progress,
      onClickUser,
      onClickMore,
      className,
      ...props
    },
    ref
  ) => {
    const [currentIdx, setCurrentIdx] = useState<number>(0);
    return (
      <div ref={ref} className={clsx(s.visualStyle, className)} {...props}>
        <div className={s.headerStyle}>
          <div className={s.profileStyle} onClick={onClickUser} aria-hidden>
            <img className={s.profileImgStyle} src={profileImg} alt={nickname} />
          </div>
          <div className={s.sloganStyle}>
            <Heading level={2} className={s.headingStyle}>
              <span className={s.highlightStyle} onClick={onClickUser} aria-hidden>
                {nickname}
              </span>
              &nbsp;에게
            </Heading>
            <Heading level={2}>
              <span className={s.highlightStyle}>{productName}</span>&nbsp;선물하기
            </Heading>
          </div>
          <button className={s.moreStyle} aria-label="more" onClick={onClickMore}>
            <ArrowRightMoreOutlined />
          </button>
        </div>
        <div className={s.swiperStyle}>
          <Swiper
            className="main-visual-swiper"
            spaceBetween={25}
            slidesPerView={1}
            onSlideChange={(swiper) => {
              setCurrentIdx(swiper.activeIndex);
            }}
          >
            {productImages.map((images, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={`${productName}-${idx}`}>
                <div className={s.slideStyle}>
                  <img className={s.slideImgStyle} src={images} alt={productName} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={s.statsStyle}>
          <FundingRate rate={rate} />
          <ProgressChip progress={progress} deadline={deadline} />
        </div>
        <ul className={s.paginationStyle}>
          {productImages.map((_, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <li className={s.bulletStyle({ active: idx === currentIdx })} key={idx} />
          ))}
        </ul>
      </div>
    );
  }
);
