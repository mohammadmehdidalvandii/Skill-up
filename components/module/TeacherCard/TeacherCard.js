import React from 'react'
import style from '@/styles/teacherCard/TeacherCard.module.css'


import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

function TeacherCard({image ,job, teacherName , student}) {
  return (
    <Link href='' className={style.teacherCard}>
        <img src={image} alt="teacher image" className={style.teacherCard_img} />
        <span className={style.teacherCard_learn}>{job}</span>
        <h6 className={style.teacherCard_teacherName}>{teacherName}</h6>
        <div className={style.teacherCard_student_iconNumber}>
            <span className={style.teacherCard_student_icon}>
                <FontAwesomeIcon icon={faUser}/>
            </span>
            <span className={style.teacherCard_student_number}>{student}</span>
        </div>
    </Link>
//     <div className="col-lg-4 col-md-6 col-sm-12">
// </div>
  )
}

export default TeacherCard