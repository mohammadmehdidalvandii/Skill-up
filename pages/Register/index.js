import React from 'react'
import Head from 'next/head'
import RegisterForm from '@/components/template/register/RegisterForm'

function Register() {
  return (
    <>
     <Head>
   <title>Skill-Up | ثبت نام </title>
   </Head>
   <RegisterForm/>
    </>
  )
}

export default Register