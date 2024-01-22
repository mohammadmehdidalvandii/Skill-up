import React from 'react'
import style from '@/styles/course/Course.module.css'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CourseCard from '@/components/module/CourseCard/CourseCard';

function Course() {
  return (
   <section className={style.course}>
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-5 col-sm-12">
                <div className={style.course_bg}>

                <div className={style.course_search}>
                    <span className={style.course_search_icon}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </span>
                    <input type="text" className={style.course_search_input}  placeholder='نام دوره...'/>
                </div>

                <div className={style.course_category}>
                    <select className={style.course_category_select}>
                        <option value="#" className={style.course_category_option}>انتخاب دست  بندی</option>
                        <option value="#" className={style.course_category_option}>حسابداری</option>
                        <option value="#" className={style.course_category_option}>شبکه اجتماعی</option>
                        <option value="#" className={style.course_category_option}>طراحی اپلیکیشن</option>
                        <option value="#" className={style.course_category_option}>دیجیتال مارکتینگ</option>
                        <option value="#" className={style.course_category_option}>برنامه نویسی</option>
                    </select>
                </div>
                <div className={style.course_category}>
                    <select className={style.course_category_select}>
                        <option value="#" className={style.course_category_option}>انتخاب براساس نام مدرس</option>
                        <option value="#" className={style.course_category_option}>حسابداری</option>
                        <option value="#" className={style.course_category_option}>شبکه اجتماعی</option>
                        <option value="#" className={style.course_category_option}>طراحی اپلیکیشن</option>
                        <option value="#" className={style.course_category_option}>دیجیتال مارکتینگ</option>
                        <option value="#" className={style.course_category_option}>برنامه نویسی</option>
                    </select>
                </div>
                <div className={style.course_category}>
                    <select className={style.course_category_select}>
                        <option value="#" className={style.course_category_option}>انتخاب براساس قیمت</option>
                        <option value="#" className={style.course_category_option}> بالاترین</option>
                        <option value="#" className={style.course_category_option}> کمترین</option>
                    </select>
                </div>
                </div>
            </div>
            <div className="col-lg-9 col-md-7 col-sm-12">
                <div className={style.course_bg}>
                    <div className="row">
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Course