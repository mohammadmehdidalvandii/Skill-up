import PageHeader from '@/components/module/PageHeader/PageHeader'
import Shops from '@/components/template/shop/Shop'
import Head from 'next/head'
import React from 'react'

function Shop() {
  return (
   <>
    <Head>
    <title>Skill-Up | فروشگاه </title>
    </Head>
    <PageHeader title='فروشگاه ما' text=' فروشکاه'/>
    <Shops/>
   </>
  )
}

export default Shop