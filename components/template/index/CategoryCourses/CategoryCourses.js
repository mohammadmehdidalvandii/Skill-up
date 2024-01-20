import React, { useState } from 'react';
import style from '@/styles/home/CategoryCourses.module.css';
import Title from '@/components/module/Title/Title';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import *as icon from "@fortawesome/free-solid-svg-icons";
import db from '@/Data/db.json'
function CategoryCourses() {
    const [categoryCourses , setCategoryCourses] = useState(db.categoryCourses)

  return (
   <section className={style.categoryCourses}>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <Title title="محورهای آموزشی"  txt="منتخب"/>
            </div>
        </div>
        <div className="row mt-4">
            {categoryCourses.map(course=>(
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={course.id}>
                    <div className={style.categoryCourses_item}>
                        <span className={style.categoryCourses_item_icon}>
                            <FontAwesomeIcon icon={icon[course.icon]}/>
                        </span>
                        <h6 className={style.categoryCourses_item_title}>{course.CourseName}</h6>
                        <span className={style.categoryCourses_item_number}> {course.CourseNumber}  دروه</span>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
   </section>
  )
}

export default CategoryCourses