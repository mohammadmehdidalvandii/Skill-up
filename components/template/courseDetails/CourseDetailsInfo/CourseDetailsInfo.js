import React from "react";
import style from "@/styles/courseDetails/CourseDetailsInfo.module.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFile, faGamepad, faTicket, faUser } from "@fortawesome/free-solid-svg-icons";

function CourseDetailsInfo() {
  return (
    <section className={style.courseDetailsInfo}>
      <div className="row">
        <div className="col-12">
          <div className={style.courseDetailsInfo_content}>
            <h5 className={style.courseDetailsInfo_title}>مشخصات آموزش</h5>
            <p className={style.courseDetailsInfo_desc}>
              این سایت دارای مجوز رسمی از جمهوری اسلامی ایران بوده و به استناد
              نماد های زیر، خرید از این وب سایت کاملاً ایمن و تایید شده می باشد!
            </p>
            <ul className={style.courseDetailsInfo_items}>
                <li className={style.courseDetailsInfo_item}>
                    <div className={style.courseDetailsInfo_item_TitleIcon}>
                        <span className={style.courseDetailsInfo_item_icon}>
                            <FontAwesomeIcon icon={faUser}/>
                        </span>
                        <span className={style.courseDetailsInfo_item_title}>تعداد شرکت کننده:</span>
                    </div>
                        <span className={style.courseDetailsInfo_item_text}>1740 نفر</span>
                </li>
                <li className={style.courseDetailsInfo_item}>
                    <div className={style.courseDetailsInfo_item_TitleIcon}>
                        <span className={style.courseDetailsInfo_item_icon}>
                            <FontAwesomeIcon icon={faFile}/>
                        </span>
                        <span className={style.courseDetailsInfo_item_title}>موضوع:</span>
                    </div>
                        <span className={style.courseDetailsInfo_item_text}>Premiere</span>
                </li>
                <li className={style.courseDetailsInfo_item}>
                    <div className={style.courseDetailsInfo_item_TitleIcon}>
                        <span className={style.courseDetailsInfo_item_icon}>
                            <FontAwesomeIcon icon={faGamepad}/>
                        </span>
                        <span className={style.courseDetailsInfo_item_title}>تعداد پروژه:</span>
                    </div>
                        <span className={style.courseDetailsInfo_item_text}>4</span>
                </li>
                <li className={style.courseDetailsInfo_item}>
                    <div className={style.courseDetailsInfo_item_TitleIcon}>
                        <span className={style.courseDetailsInfo_item_icon}>
                            <FontAwesomeIcon icon={faClock}/>
                        </span>
                        <span className={style.courseDetailsInfo_item_title}>تعداد قسمت:</span>
                    </div>
                        <span className={style.courseDetailsInfo_item_text}>32</span>
                </li>
                <li className={style.courseDetailsInfo_item}>
                    <div className={style.courseDetailsInfo_item_TitleIcon}>
                        <span className={style.courseDetailsInfo_item_icon}>
                            <FontAwesomeIcon icon={faTicket}/>
                        </span>
                        <span className={style.courseDetailsInfo_item_title}>سطح:</span>
                    </div>
                        <span className={style.courseDetailsInfo_item_text}>مقدماتی</span>
                </li>
            </ul>
            <span className={style.courseDetailsInfo_price}>1,200,000 تومان</span>
            <button className={style.CourseDetailsInfo_btn}>خرید دوره</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetailsInfo;
