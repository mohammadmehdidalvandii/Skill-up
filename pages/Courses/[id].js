import React from 'react'
import Head from 'next/head'
import PageHeader from '@/components/module/PageHeader/PageHeader'
import CourseDetailsPage from '@/components/template/courseDetails/CourseDetailsPage/CourseDetailsPage'
import CourseDetail from '@/components/template/courseDetails/CourseDetail/CourseDetail'

function CourseDetails() {
  return (
    <>
     <Head>
        <title>Skill-Up | جزئیات دوره</title>
    </Head>
     <PageHeader title='جزئیات دوره' text='جزئیات دوره'/>
     <div className="container">
     <div className="row mt-5 mb-5">
        <div className="col-lg-8">
            <CourseDetailsPage/>
            <CourseDetail/>
        </div>
        <div className="col-lg-4"></div>
     </div>
     </div>
    </>
  )
}

export default CourseDetails