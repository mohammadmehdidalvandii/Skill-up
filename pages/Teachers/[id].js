import React from 'react'
import Head from 'next/head'
import PageHeader from '@/components/module/PageHeader/PageHeader'
import TeacherDetail from '@/components/template/teacherDetails/TeacherDetail'

function TeacherDetails() {
  return (
    <>
     <Head>
        <title>Skill-Up |  جزئیات - مدرس </title>
    </Head>
    <PageHeader title='جزئیات مدرس' text='جزئیات مدرس'/>
    <TeacherDetail/>
    </>
  )
}

export default TeacherDetails