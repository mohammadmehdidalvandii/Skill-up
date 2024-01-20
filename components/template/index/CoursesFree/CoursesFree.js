import React from 'react'
import style from '@/styles/home/CoursesFree.module.css'
import Title from '@/components/module/Title/Title'
import CourseCard from '@/components/module/CourseCard/CourseCard'
import Link from 'next/link'



function CoursesFree() {
  return (
    <section className={style.coursesFree}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title='دوره های آموزشی' txt=' رایـگان'/>
                </div>
            </div>
            <div className="row mt-4">
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
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