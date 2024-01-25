import React from 'react';
import style from '@/styles/courseDetails/CourseDetailComments.module.css'

function CourseDetailComments() {
  return (
    <section className={style.courseDetailComments}>
        <div className="row">
            <div className="col-12">
                <h6 className={style.courseDetail_title}>دیدگاه ها دوره</h6>
                <div className={style.courseDetailComments_comment}>
                    <img src="/images/user-1.jpg" alt="" className={style.courseDetailComments_img} />
                    <div className={style.courseDetailComments_comment_info}>
                        <span className={style.courseDetailComments_userName}>مژگان قاسمی نیا</span>
                        <p className={style.courseDetailComments_commentText}>" ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. "</p>
                    </div>
                </div>
                <div className={style.courseDetailComments_comment}>
                    <img src="/images/user-1.jpg" alt="" className={style.courseDetailComments_img} />
                    <div className={style.courseDetailComments_comment_info}>
                        <span className={style.courseDetailComments_userName}>مژگان قاسمی نیا</span>
                        <p className={style.courseDetailComments_commentText}>" ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. "</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CourseDetailComments