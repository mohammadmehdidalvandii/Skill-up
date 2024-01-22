import Head from 'next/head'
import React from 'react'
import PageHeader from '@/components/module/PageHeader/PageHeader'
import Course from '@/components/template/course/Course/Course'


function Courses() {
  return (
   <>
    <Head>
        <title>Skill-Up | دوره ها</title>
    </Head>
    <PageHeader title='دوره های آموزشی' text='دروه های آموزشی'/>
    <Course/>
   </>
  )
}

export default Courses