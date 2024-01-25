import React, { useState } from 'react'
import style from '@/styles/courseDetails/CourseDetail.module.css'
import CourseDetailIntroduction from '../CourseDetailIntroduction/CourseDetailIntroduction'
import CourseDetailHeadline from '../CourseDetailHeadline/CourseDetailHeadline'
import CourseDetailTeacher from '../CourseDetailTeacher/CourseDetailTeacher'




function CourseDetail() {
  const [menuCourse , setMenuCourse] = useState('introduction')
  const handlerMenuCourse = (menuID)=>{
    setMenuCourse(menuID)
  }
  return (
    <section className={style.courseDetail}>
        <div className="row">
            <div className="col-12">
                <img src="/images/cr-1.jpg" alt="images course" className={style.courseDetail_imageCourse} />
            </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className={style.courseDetail_buttons}>
              <button className={`${style.courseDetail_btn} ${menuCourse === 'introduction' ? `${style.courseDetail_btnActive}` :``}`}  onClick={()=>handlerMenuCourse('introduction')}>معرفی</button>
              <button className={`${style.courseDetail_btn} ${menuCourse === 'headline' ? `${style.courseDetail_btnActive}` :``}`}  onClick={()=>handlerMenuCourse('headline')}>سرفصل</button>
              <button className={`${style.courseDetail_btn} ${menuCourse === 'teacher' ? `${style.courseDetail_btnActive}` :``}`}  onClick={()=>handlerMenuCourse('teacher')}>مدرس</button>
              <button className={`${style.courseDetail_btn} ${menuCourse === 'comments' ? `${style.courseDetail_btnActive}` :``}`}  onClick={()=>handlerMenuCourse('comments')}>دیدگاه</button>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            {menuCourse === 'introduction' && (<CourseDetailIntroduction/>)}
            {menuCourse === 'headline' && (<CourseDetailHeadline/>)}
            {menuCourse === 'teacher' && (<CourseDetailTeacher/>)}
            {menuCourse === 'comments' && (<span>comments</span>)}
          </div>
        </div>
    </section>
  )
}

export default CourseDetail