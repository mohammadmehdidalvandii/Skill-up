import React from "react";
import style from "@/styles/about/AboutDetail.module.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function AboutDetail() {
  return (
    <section className={style.aboutDetail}>
      <div className="container">
        <div className="row-12">
          <div className={style.aboutDetail_content}>
            <h5 className={style.aboutDetail_title}>
              معرفی بهترین مربیان در شهر شما
            </h5>
            <p className={style.aboutDetail_desc}>
              در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
              راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
              حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
              طراحی اساسا مورد استفاده قرار گیرد
            </p>
              <ul className={style.aboutDetail_items}>
                <li className={style.aboutDetail_item}>
                  <span className={style.aboutDetail_item_icon}>
                    <FontAwesomeIcon icon={faCheck}/>
                  </span>
                  <span className={style.aboutDetail_item_text}>دسترسی کاملا مادام العمر</span>
                </li>
                <li className={style.aboutDetail_item}>
                  <span className={style.aboutDetail_item_icon}>
                    <FontAwesomeIcon icon={faCheck}/>
                  </span>
                  <span className={style.aboutDetail_item_text}>بیش از 20 منبع قابل دانلود</span>
                </li>
                <li className={style.aboutDetail_item}>
                  <span className={style.aboutDetail_item_icon}>
                    <FontAwesomeIcon icon={faCheck}/>
                  </span>
                  <span className={style.aboutDetail_item_text}>
ارائه مدرک معتبر</span>
                </li>
                <li className={style.aboutDetail_item}>
                  <span className={style.aboutDetail_item_icon}>
                    <FontAwesomeIcon icon={faCheck}/>
                  </span>
                  <span className={style.aboutDetail_item_text}>آزمایشی رایگان 7 روز</span>
                </li>
              </ul>
              <Link href='/' className={style.aboutDetail_link}>ثبت نام</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDetail;
