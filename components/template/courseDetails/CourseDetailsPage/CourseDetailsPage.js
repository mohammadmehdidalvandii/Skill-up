import React from 'react'
import style from "@/styles/courseDetails/CourseDetailsPage.module.css"

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar, faUser, faVideo } from "@fortawesome/free-solid-svg-icons";

function CourseDetailsPage({title}) {
  return (
  <section className={style.courseDetailsPage}>
 
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className={style.courseDetailsPage_content}>
                    <h5 className={style.courseDetailsPage_title}>{title}</h5>
                    <div className={style.courseDetailsPage_teacher}>
                        <img src="/images/user-1.jpg" alt="" className={style.courseDetailsPage_teacher_img} />
                        <div className={style.courseDetailsPage_teacher_textName}>
                            <span className={style.courseDetailsPage_teacher_text}>مدرس </span>
                            <h6 className={style.courseDetailsPage_teacher_name}>نازنین اسلامی</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='.col-lg-6 col-md-6 col-sm-12 '>
                <ul className={style.courseDetailsPage_items}>
                    <li className={style.courseDetailsPage_item}>
                        <span className={style.courseDetailsPage_item_icon}>
                            <FontAwesomeIcon icon={faStar}/>
                        </span>
                        <span className={style.courseDetailsPage_item_text}>4.9 امتیاز (5,254)</span>
                    </li>
                    <li className={style.courseDetailsPage_item}>
                        <span className={style.courseDetailsPage_item_icon}>
                            <FontAwesomeIcon icon={faUser}/>
                        </span>
                        <span className={style.courseDetailsPage_item_text}>2,54,740 شرکت کننده</span>
                    </li>
                    <li className={style.courseDetailsPage_item}>
                        <span className={style.courseDetailsPage_item_icon}>
                            <FontAwesomeIcon icon={faClock}/>
                        </span>
                        <span className={style.courseDetailsPage_item_text}>4 ساعت 52 دقیقه</span>
                    </li>
                    <li className={style.courseDetailsPage_item}>
                        <span className={style.courseDetailsPage_item_icon}>
                            <FontAwesomeIcon icon={faVideo}/>
                        </span>
                        <span className={style.courseDetailsPage_item_text}>47 ویدئو آموزشی</span>
                    </li>
                </ul>
            </div>
        </div>
  </section>
  )
}   

export default CourseDetailsPage