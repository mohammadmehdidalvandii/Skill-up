import PageHeader from '@/components/module/PageHeader/PageHeader'
import AboutComment from '@/components/template/about/AboutComment/AboutComment'
import AboutDetail from '@/components/template/about/AboutDetail/AboutDetail'
import Head from 'next/head'
import React from 'react'

function About() {
  return (
    <>  
    <Head>
    <title>Skill-Up | درباه ما </title>
    </Head>
    <PageHeader title='درباره ما' text='درباره ما'/>
    <AboutDetail/>  
    <AboutComment/>
    </>
  )
}

export default About