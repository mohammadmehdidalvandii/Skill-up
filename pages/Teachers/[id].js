import React, { useState } from 'react'
import Head from 'next/head'
import PageHeader from '@/components/module/PageHeader/PageHeader'
import TeacherDetail from '@/components/template/teacherDetails/TeacherDetail'
import db from '@/Data/db.json'
import { useRouter } from 'next/router'

function TeacherDetails() {
  const [teachers , setTeachers ] = useState(db.Teacher)
  const router = useRouter()
  const {id} =router.query

  const foundTeacher = teachers.find(teacher => teacher.id == +id)

  return (
    <>
     <Head>
        <title>Skill-Up |  جزئیات - مدرس </title>
    </Head>
    <PageHeader title='جزئیات مدرس' text='جزئیات مدرس'/>
    <TeacherDetail
      {...foundTeacher}
    />
    </>
  )
}

export default TeacherDetails