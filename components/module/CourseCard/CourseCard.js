import React from 'react'
import style from '@/styles/courseCard/CourseCard.module.css'


import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLock } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

function CourseCard({image,category,title,time,id}) {
  return (
    <>
         <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <Link href='' className={style.courseCard}>
                        <div className={style.courseCard_imageIcon}>
                            <img src={image} alt="" className={style.courseCard_img} />
                            <span className={style.courseCard_icon}>
                                <FontAwesomeIcon icon={faLock}/>
                            </span>
                        </div>

                        <div className={style.courseCard_categoryPrice}>
                            <div className={style.courseCard_category}>
                                <span className={style.courseCard_categoryText}>{category}</span>
                            </div>
                            <div className={style.courseCard_price}>
                                <span className={style.courseCard_price_text}>1,490,000</span>
                                <span className={style.courseCard_price_number}>تومان</span>
                            </div>
                        </div>

                        <h4 className={style.courseCard_course_title}>{title}</h4>

                        <div className={style.courseCard_time}>
                            <span className={style.courseCard_time_icon}>
                                <FontAwesomeIcon icon={faClock}/>
                            </span>
                            <span className={style.courseCard_time_text}>{time}</span>
                        </div>

                        <div className={style.courseCard_teacher}>
                            <img src="/images/te-1.jpg" alt="" className={style.courseCard_teacher_img} />
                            <span className={style.courseCard_teacher_name}>امین زمانی</span>
                        </div>
                    </Link>
                </div>
    </>
  )
}

export default CourseCard