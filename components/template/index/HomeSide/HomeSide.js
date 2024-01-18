import React from "react";
import style from "@/styles/home/HomeSide.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function HomeSide() {
  return (
    <section className={style.homeSide}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={style.homeSide_content}>
              <h1 className={style.homeSide_title}>
                در مسیر پیشرفت، در کنار شما هستیم...
              </h1>
              <p className={style.home_description}>
                مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد.
              </p>
            </div>
            <div className={style.homeSide_search}>
                    <span className={style.homeSide_search_icon}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </span>
                    <input type="text"  className={style.homeSide_search_input} placeholder="جستجو ..."/>
                    <button className={style.homeSide_search_btn}>جستجو</button>
            </div>
            <ul className={style.homeSide_items}>
                <li className={style.homeSide_item}>
                    <span className={style.homeSide_item_title}>72 کاربر</span>
                    <span className={style.homeSide_item_text}>موفق و راضی</span>
                </li>
                <li className={style.homeSide_item}>
                    <span className={style.homeSide_item_title}>100 مدرس</span>
                    <span className={style.homeSide_item_text}>باتجربه و عالی</span>
                </li>
                <li className={style.homeSide_item}>
                    <span className={style.homeSide_item_title}>52 دوره</span>
                    <span className={style.homeSide_item_text}>آموزش آنلاین</span>
                </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              src="/images/home.png"
              alt="home image"
              className={style.homeSide_img}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSide;
