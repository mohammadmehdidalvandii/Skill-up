import React from 'react'
import Head from 'next/head'
import PageHeader from '@/components/module/PageHeader/PageHeader'
import Teacher from '@/components/template/teachers/Teacher/Teacher'

function Teachers() {
  return (
    <>
         <Head>
             <title>Skill-Up | لیست مدرسین</title>
        </Head>
        <PageHeader title='لیست مدرسین' text='لیست مدرسین'/>
        <Teacher/>
    </>
  )
}

export default Teachers