import React from 'react'
import style from '@/styles/teacherCard/TeacherCard.module.css'


import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

function TeacherCard() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
    <Link href='' className={style.teacherCard}>
        <img src="/images/t-1.png" alt="teacher image" className={style.teacherCard_img} />
        <span className={style.teacherCard_learn}>مدرس ریاضی و فیزیک</span>
        <h6 className={style.teacherCard_teacherName}>مصطفی اسلامی</h6>
        <div className={style.teacherCard_student_iconNumber}>
            <span className={style.teacherCard_student_icon}>
                <FontAwesomeIcon icon={faUser}/>
            </span>
            <span className={style.teacherCard_student_number}>2,500</span>
        </div>
    </Link>
</div>
  )
}

export default TeacherCard