import React from "react";
import style from "@/styles/home/ProcessWork.module.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faEdit,
  faPhotoVideo,
  faQuestionCircle,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

function ProcessWork() {
  return (
    <section className={style.processWork}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={style.processWork_content}>
              <h5 className={style.processWork_title}>
                معرفی بهترین مربیان در شهر شما
              </h5>
              <p className={style.processWork_desc}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
            </div>
            <ul className={style.processWork_itemsList}>
              <li className={style.processWork_itemList}>
                <span className={style.processWork_itemList_icon}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={style.processWork_itemList_text}>
                  دسترسی کاملا مادام العمر
                </span>
              </li>
              <li className={style.processWork_itemList}>
                <span className={style.processWork_itemList_icon}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={style.processWork_itemList_text}>
                  بیش از 20 منبع قابل دانلود
                </span>
              </li>
              <li className={style.processWork_itemList}>
                <span className={style.processWork_itemList_icon}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={style.processWork_itemList_text}>
                  ارائه مدرک معتبر
                </span>
              </li>
              <li className={style.processWork_itemList}>
                <span className={style.processWork_itemList_icon}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={style.processWork_itemList_text}>
                  آزمایشی رایگان 7 روز
                </span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              src="/images/side-1.jpg"
              alt=""
              className={style.processWork_img}
            />
          </div>
        </div>
        <div className="row mt-2  ">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              src="/images/side-2.jpg"
              alt=""
              className={style.processWork_img}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <ul className={style.processWork_items}>
              <li className={style.processWork_item}>
                <span className={style.processWork_item_icon}>
                  <FontAwesomeIcon icon={faPhotoVideo} />
                </span>
                <div className={style.processWork_item_content}>
                  <h6 className={style.processWork_item_title}>
                    آپلود دوره های آموزشی
                  </h6>
                  <span className={style.processWork_item_text}>
                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو
                    در زبان فارسی ایجاد کرد.
                  </span>
                </div>
              </li>
              <li className={style.processWork_item}>
                <span className={style.processWork_item_icon}>
                  <FontAwesomeIcon icon={faEdit} />
                </span>
                <div className={style.processWork_item_content}>
                  <h6 className={style.processWork_item_title}>
                    سفارشی سازی آسان
                  </h6>
                  <span className={style.processWork_item_text}>
                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو
                    در زبان فارسی ایجاد کرد.
                  </span>
                </div>
              </li>
              <li className={style.processWork_item}>
                <span className={style.processWork_item_icon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </span>
                <div className={style.processWork_item_content}>
                  <h6 className={style.processWork_item_title}>
                    پرسش سوالات نامحدود
                  </h6>
                  <span className={style.processWork_item_text}>
                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو
                    در زبان فارسی ایجاد کرد.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessWork;
