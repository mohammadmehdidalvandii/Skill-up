import React from 'react';
import style from '@/styles/teacherDetails/teacherDetails.module.css'

function TeacherDetail({image , teacherName}) {
  return (
   <section className={style.teacherDetail}>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className={style.teacherDetail_content}>
                    <img src={image} alt="" className={style.teacherDetail_img} />
                    <h6 className={style.teacherDetail_name}>{teacherName}</h6>
                    <p className={style.teacherDetail_desc}>ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد .</p>
                    <ul className={style.teacherDetail_items}>
                        <li className={style.teacherDetail_item}>
                            <span className={style.teacherDetail_item_text}>گرافیک
</span>
                        </li>
                        <li className={style.teacherDetail_item}>
                            <span className={style.teacherDetail_item_text}>102 دوره</span>
                        </li>
                        <li className={style.teacherDetail_item}>
                            <span className={style.teacherDetail_item_text}>502 شرکت کننده  </span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default TeacherDetail