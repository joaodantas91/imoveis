import { Swiper, SwiperSlide } from 'swiper/react';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import styles from './style.module.scss'

// import required modules
import { Grid, Manipulation, Navigation } from "swiper";
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';

type BannerProps = {
  data: {
    id: string;
    title: string;
    description: string;
    images: string[];
  }
}

function Banner({ data }: BannerProps) {
  const [index, setIndex] = useState(-1);
  const imagePath = `/db/images/${data.id}`;

  return (
    <>
      <div className={styles.swiperWrapper}>
        <div className={`${styles["swiper-button"]} image-swiper-button-next`}>
          <span className="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </div>
        <div className={`${styles["swiper-button"]} image-swiper-button-prev`}>
          <span className="material-symbols-outlined">
            arrow_back_ios_new
          </span>
        </div>
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
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled"
          }}
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
          className={styles.swiper}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          onInit={(swiper) => {
            swiper.appendSlide("<div class='swiper-slide'></div>")
            swiper.update();
          }}
        >
          {
            data.images.map((item, index) => (
              <SwiperSlide key={item} className={styles.swiperSlide}>
                <Image quality={100} unoptimized src={`${imagePath}/${item}`} alt={item} height={300} width={300} onClick={() => setIndex(index)} />
              </SwiperSlide>
            ))
          }

        </Swiper >
      </div>
      <Lightbox
        plugins={[Thumbnails]}
        thumbnails={{
          vignette: false,
          // width: ,
          padding: 0,
          border: 0,
          imageFit: 'cover',
          
        }}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={data.images.map(item => ({src: `${imagePath}/${item}`}))}
        className={styles.lightbox}
      />
    </>
  );
}

export default Banner;

