import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import style from './style.module.scss'

// import required modules
import { Grid, Manipulation, Navigation } from "swiper";
import Image from 'next/image'
import React from 'react';

type BannerProps = {
  data: {
    link: string,
    key: string
  }[]
}

function Banner({ data }: BannerProps) {
  return (
    <Swiper
      slidesPerView={5}
      slidesPerGroup={5}
      grid={{
        rows: 2,
        fill: "column"
      }}
      speed={800}
      spaceBetween={3}
      // grabCursor={true}
      // keyboard={{
      //   enabled: true,
      // }}
      navigation={true}
      // breakpoints={{
      //   769: {
      //     slidesPerView: 3,
      //     slidesPerGroup: 3,
      //   },
      // }}
      // scrollbar={true}
      // navigation={true}
      // pagination={{
      //   clickable: true,
      // }}
      modules={[Grid, Navigation, Manipulation]}
      className={style.swiper}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      onInit={(swiper) => {
        swiper.appendSlide("<div class='swiper-slide'></div>")
        console.log(swiper.slides)
        swiper.update();
      }}
    >
      {
        data.map((item) => (
          <SwiperSlide key={item.key} className={style.swiperSlide}>
            <Image src={item.link} alt={item.key} height={300} width={300} />
          </SwiperSlide>
        ))
      }

    </Swiper >
  );
}

export default Banner;

