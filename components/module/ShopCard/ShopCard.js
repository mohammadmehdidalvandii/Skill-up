import React from 'react'
import Link from 'next/link'

import style from '@/styles/shopCard/ShopCard.module.css'

function ShopCard() {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <Link href='' className={style.shopCard}>
        <img src="/images/p-1.png" alt="" className={style.shopCard_img} />
        <h6 className={style.shopCard_name}>کتاب فارسی جامع کنکور جلد یک</h6>
        <span className={style.shopCard_price}>149,000 تومان</span>
        <button className={style.shopCard_btn}>افزودن به سبد خرید</button>
    </Link>
  </div>
  )
}

export default ShopCard