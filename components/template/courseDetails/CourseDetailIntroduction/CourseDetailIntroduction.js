import React from "react";
import style from "@/styles/courseDetails/CourseDetailIntroduction.module.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

function CourseDetailIntroduction() {
  return (
    <section className={style.CourseDetailIntroduction}>
      <div className="row">
        <div className="col-12">
          <div className={style.CourseDetailIntroduction_content}>
            <h6 className={style.courseDetail_title}> جزئیات آموزش</h6>
            <p className={style.CourseDetailIntroduction_description}>
              چه بخواهید یک فیلم شخصی را تدوین کنید یا تغییرات جزیی را روی یک
              ویدیو اعمال نمایید و یا وقتی بخواهید به شکل جدی‌تر و به صورت
              هالیوودی به تدوین فیلم و تولیدات سینمایی شگفت‌انگیز بپردازید و از
              این راه درآمد هم داشته باشید، باید به سراغ یک نرم افزار قدرتمند
              مثل ادوبی پریمیر بروید. در ادامه به توضیحات مفصل تر در مورد آموزش
              پریمیر می‌پردازیم.
            </p>
            <p className={style.CourseDetailIntroduction_description}>
              آموزش پریمیر در حالی که مطالب بیشتری را پوشش داده و نسبت به سایر
              آموزش‌ها جامع‌تر است، مدت زمان آن به نسبت آموزش‌های مشابه ⣿ یک سوم
              ⣿ است یعنی اکثر دوره‌های موجود در سطح وب همین محتوا را در زمانی
              معادل ۳ برابر این دوره تدریس می‌کنند که این موضوع باعث اتلاف وقت
              زیادی در یادگیری شما خواهد شد! لذا مدت زمان این دوره فوق‌العاده
              مفید بوده و در کمترین زمان بیشترین مباحث را می‌آموزید!
            </p>
            <ul className={style.CourseDetailIntroduction_items}>
              <li className={style.CourseDetailIntroduction_item}>
                <span className={style.CourseDetailIntroduction_item_title}>
                  مقدمه و معرفی دوره
                </span>
              </li>
              <li className={style.CourseDetailIntroduction_item}>
                <span className={style.CourseDetailIntroduction_item_icon}>
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </span>
                <span className={style.CourseDetailIntroduction_item_text}>
                  مقدمه و معرفی مدرس و دوره، شیوه تدریس و پیشگفتار
                </span>
              </li>
              <li className={style.CourseDetailIntroduction_item}>
                <span className={style.CourseDetailIntroduction_item_icon}>
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </span>
                <span className={style.CourseDetailIntroduction_item_text}>
                  چرا تنها با همین دوره میتوانید حضور قدرتمندی در بازار داشته
                  باشید؟
                </span>
              </li>
              <li className={style.CourseDetailIntroduction_item}>
                <span className={style.CourseDetailIntroduction_item_icon}>
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </span>
                <span className={style.CourseDetailIntroduction_item_text}>
                  آنچه در دوره آموزش پریمیر پرو با هم یاد میگیریم؟
                </span>
              </li>
              <li className={style.CourseDetailIntroduction_item}>
                <span className={style.CourseDetailIntroduction_item_icon}>
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </span>
                <span className={style.CourseDetailIntroduction_item_text}>
                  انتخاب بهترین نسخه پریمیر و بررسی تفاوت های هر نسخه از پریمیر
                </span>
              </li>
              <li className={style.CourseDetailIntroduction_item}>
                <span className={style.CourseDetailIntroduction_item_icon}>
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </span>
                <span className={style.CourseDetailIntroduction_item_text}>
                  نکات مربوط به نصب نسخه های پریمیر ۲۰۱۷ و قبل از آن
                </span>
              </li>
            </ul>
            <h6 className={style.courseDetail_title}>
              نرم افزارهای مرتبط با آموزش
            </h6>
            <p className={style.CourseDetailIntroduction_description}>
              چه بخواهید یک فیلم شخصی را تدوین کنید یا تغییرات جزیی را روی یک
              ویدیو اعمال نمایید و یا وقتی بخواهید به شکل جدی‌تر و به صورت
              هالیوودی به تدوین فیلم و تولیدات سینمایی شگفت‌انگیز بپردازید و از
              این راه درآمد هم داشته باشید، باید به سراغ یک نرم افزار قدرتمند
              مثل ادوبی پریمیر بروید. در ادامه به توضیحات مفصل تر در مورد آموزش
              پریمیر می‌پردازیم. آموزش پریمیر در حالی که مطالب بیشتری را پوشش
              داده و نسبت به سایر آموزش‌ها جامع‌تر است، مدت زمان آن به نسبت
              آموزش‌های مشابه ⣿ یک سوم ⣿ است یعنی اکثر دوره‌های موجود در سطح وب
              همین محتوا را در زمانی معادل ۳ برابر این دوره تدریس می‌کنند که این
              موضوع باعث اتلاف وقت زیادی در یادگیری شما خواهد شد! لذا مدت زمان
              این دوره فوق‌العاده مفید بوده و در کمترین زمان بیشترین مباحث را
              می‌آموزید!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetailIntroduction;
