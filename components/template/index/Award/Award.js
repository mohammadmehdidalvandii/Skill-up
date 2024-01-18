import React from "react";
import style from "@/styles/home/Award.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBible,
  faBookOpen,
  faBusinessTime,
  faJoint,
  faJournalWhills,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

function Award() {
  return (
    <section className={style.award}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className={style.award_item}>
              <span className={style.award_item_icon}>
                <FontAwesomeIcon icon={faBookOpen} />
              </span>
              <div className={style.award_item_content}>
                <span className={style.award_item_text}>200+ دوره آموزشی</span>
                <p className={style.award_item_paraph}>
                  جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                  قرار گیرد.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className={style.award_item}>
              <span className={style.award_item_icon}>
                <FontAwesomeIcon icon={faBusinessTime} />
              </span>
              <div className={style.award_item_content}>
                <span className={style.award_item_text}>
                  پشتیبانی مادام العمر
                </span>
                <p className={style.award_item_paraph}>
                  جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                  قرار گیرد.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className={style.award_item}>
              <span className={style.award_item_icon}>
                <FontAwesomeIcon icon={faUserShield} />
              </span>
              <div className={style.award_item_content}>
                <span className={style.award_item_text}>800 هنرجو</span>
                <p className={style.award_item_paraph}>
                  جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                  قرار گیرد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Award;
