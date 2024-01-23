import PageHeader from '@/components/module/PageHeader/PageHeader'
import LoginForm from '@/components/template/login/LoginForm'
import Head from 'next/head'
import React from 'react'

function Login() {
  return (
   <>
   <Head>
   <title>Skill-Up | ورود </title>
   </Head>
   <PageHeader title='ثبت نام' text='ثبت نام'/>
  <LoginForm/>  
   </>
  )
}

export default Login