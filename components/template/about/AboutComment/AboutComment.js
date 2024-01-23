import React from 'react';
import style from '@/styles/about/AboutComment.module.css'
import Title from '@/components/module/Title/Title';
import CommentCard from '@/components/module/CommentCard/CommentCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function AboutComment() {
  return (
    <section className={style.aboutComment}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title='نظرات' txt='دانش آموختگان'/>
                </div>
            </div>
            <div className="row mt-4">

            <Swiper 
            breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            navigation={true} 
            modules={[Navigation]} 
            className="mySwiper">
        <SwiperSlide> <CommentCard/> </SwiperSlide>
        <SwiperSlide> <CommentCard/> </SwiperSlide>
        <SwiperSlide> <CommentCard/> </SwiperSlide>
        <SwiperSlide> <CommentCard/> </SwiperSlide>
        <SwiperSlide> <CommentCard/> </SwiperSlide>
        <SwiperSlide> <CommentCard/> </SwiperSlide>
      </Swiper>
            </div>
        </div>
    </section>
  )
}

export default AboutComment