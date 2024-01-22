import React from 'react';
import style from '@/styles/shop/Shop.module.css'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ShopCard from '@/components/module/ShopCard/ShopCard';

function Shop() {
  return (
    <section className={style.shop}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={style.shop_bg}>
                    <div className={style.shop_search}>
                        <span className={style.shop_search_icon}>
                            <FontAwesomeIcon icon={faSearch}/>
                        </span>
                        <input type="text" className={style.shop_search_input}  placeholder='جستجو محصول ...'/>
                        <button className={style.shop_search_btn}>جستجو</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                    <ShopCard/>
                    <ShopCard/>
                    <ShopCard/>
                    <ShopCard/>
                    <ShopCard/>
            </div>
        </div>
    </section>
  )
}

export default Shop