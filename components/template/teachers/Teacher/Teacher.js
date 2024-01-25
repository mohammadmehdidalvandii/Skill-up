import React from 'react';
import style from '@/styles/teachers/Teacher.module.css'
import TeacherCard from '@/components/module/TeacherCard/TeacherCard';

function Teacher() {
  return (
    <section className={style.teacher}>
       <div className="container">
       <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <TeacherCard/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <TeacherCard/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <TeacherCard/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <TeacherCard/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <TeacherCard/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <TeacherCard/>
            </div>
        </div>
       </div>
    </section>
  )
}

export default Teacher