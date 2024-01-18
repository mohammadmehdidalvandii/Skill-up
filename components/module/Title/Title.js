import React from "react";
import style from "@/styles/title/Title.module.css";

function Title({title , txt}) {
  return (
    <section className={style.title}>
      <div className={style.title_wrapper}>
        <h3 className={style.title_text}>{title}<span className={style.title_text_color}>{txt}</span></h3>
        <p className={style.title_paraph}>
          با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </p>
      </div>
    </section>
  );
}

export default Title;
