import React from 'react'
import Head from 'next/head'
import HomeSide from '@/components/template/index/HomeSide/HomeSide'
import Award from '@/components/template/index/Award/Award'
import CategoryCourses from '@/components/template/index/CategoryCourses/CategoryCourses'
import CoursesFree from '@/components/template/index/CoursesFree/CoursesFree'
import ProcessWork from '@/components/template/index/ProcessWork/ProcessWork'
function index() {
  return (
    <>
    <Head>
      <title>Skill-Up | خانه </title>
    </Head>
    <HomeSide/>
    <Award/>
    <CategoryCourses/>
    <CoursesFree/>
    <ProcessWork/>
    </>
  )
}

export default index