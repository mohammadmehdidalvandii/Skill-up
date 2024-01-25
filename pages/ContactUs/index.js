import React from 'react';

import Head from 'next/head';
import PageHeader from '@/components/module/PageHeader/PageHeader';
import Contact from '@/components/template/contact/Contact';

function ContactUs() {
  return (
    <>
    <Head>
        <title>Skill-Up |  ارتباط با ما</title>
    </Head>
    <PageHeader title='تماس  با ما' text='تماس  با ما'/>
    <Contact/>
    </>
  )
}

export default ContactUs