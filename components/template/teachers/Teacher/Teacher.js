import React, { useState } from 'react';
import style from '@/styles/teachers/Teacher.module.css'
import TeacherCard from '@/components/module/TeacherCard/TeacherCard';

import db from '@/Data/db.json'


function Teacher() {
    const [Teachers ,setTeachers] = useState(db.Teacher)

  return (
    <section className={style.teacher}>
       <div className="container">
       <div className="row">
            {
                Teachers.map(teacher => (
                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12' key={teacher.id}>
                        <TeacherCard 
                        {...teacher}
                        />
                    </div>
                ))
            }

            {/* {products.map(product => (
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={product.id}>
                <TeacherCard
                    {...product}
                    student={product.student.toLocaleString()}
                />
            </div>
            ))} */}
        </div>
       </div>
    </section>
  )
}

export default Teacher