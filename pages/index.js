import React from 'react'
import Head from 'next/head'
import HomeSide from '@/components/template/index/HomeSide/HomeSide'
import Award from '@/components/template/index/Award/Award'
function index() {
  return (
    <>
    <Head>
      <title>Skill-Up | خانه </title>
    </Head>
    <HomeSide/>
    <Award/>
    </>
  )
}

export default index