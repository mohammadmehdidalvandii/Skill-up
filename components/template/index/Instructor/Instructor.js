import React from 'react'
import style from '@/styles/home/Instructor.module.css';
import Title from '@/components/module/Title/Title';
import TeacherCard from '@/components/module/TeacherCard/TeacherCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation , Pagination } from 'swiper/modules';



function Instructor() {
  return (
    <section className={style.instructor}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title='لیست مدرسین' txt='پیشنهادی'/>
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
             pagination={{
                dynamicBullets: true,
              }}
              modules={[Navigation , Pagination]}
               >
        <SwiperSlide> <TeacherCard/></SwiperSlide>
        <SwiperSlide> <TeacherCard/></SwiperSlide>
        <SwiperSlide> <TeacherCard/></SwiperSlide>
        <SwiperSlide> <TeacherCard/></SwiperSlide>
        <SwiperSlide> <TeacherCard/></SwiperSlide>
        <SwiperSlide> <TeacherCard/></SwiperSlide>
      </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Instructor