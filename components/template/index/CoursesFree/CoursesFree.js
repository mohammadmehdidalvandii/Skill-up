import React, { useState } from 'react'
import style from '@/styles/home/CoursesFree.module.css'
import Title from '@/components/module/Title/Title'
import CourseCard from '@/components/module/CourseCard/CourseCard'
import Link from 'next/link'

import db from '@/Data/db.json'

function CoursesFree() {
    const [courses, setCourses]= useState(db.Courses)
  return (
    <section className={style.coursesFree}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title='دوره های آموزشی' txt=' رایـگان'/>
                </div>
            </div>
            <div className="row mt-4">
                {courses.map(course=>(
                    <CourseCard 
                    key={course.id}
                    {...course}
                    price={course.price.toLocaleString()}
                    />
                ))}
            </div>
            <div className="row mt-4">
                <div className="col-12">
                <Link href='' className='buttonGreen'>مشاهده بیشتر</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CoursesFree