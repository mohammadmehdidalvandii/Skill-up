import React from "react";
import style from "@/styles/footer/Footer.module.css";
import Link from "next/link";


function Footer() {
  return (
    <section className={style.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className={style.footer_content}>
              <img
                src="/images/logo-light.png"
                alt=""
                className={style.footer_logo}
              />
              <h6 className={style.footer_content_title}>
                آیا به کمک تیم پشتیبانی نیاز دارید؟
              </h6>
              <p className={style.footer_description}>هر ماه با عضویت در خبرنامه ما از به‌روزرسانی‌ها، معاملات جدید، آموزش‌ها و تخفیف‌ها باخبر شوید.</p>
              <div className={style.footer_newsletter}>
                <input type="text" className={style.footer_newsletter_input} placeholder="ایمیل"/>
                <button className={style.footer_newsletter_btn}>عضویت</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <ul className={style.footer_menuItems}>
                <li className={style.footer_menuItem}>
                    <h5 className={style.footer_title}>صفحات</h5>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='/' className={style.footer_menuItem_link}>خانه</Link>
                </li>
                <li className={style.footer_menuItem}>
                <Link href='' className={style.footer_menuItem_link}>درباره ما</Link>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='' className={style.footer_menuItem_link}>خدمات</Link>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='' className={style.footer_menuItem_link}>دوره آموزشی</Link>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='' className={style.footer_menuItem_link}>تماس با ما</Link>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='' className={style.footer_menuItem_link}>لیست بلاگ</Link>
                </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <ul className={style.footer_menuItems}>
                <li className={style.footer_menuItem}>
                    <h5 className={style.footer_title}>تمام بخش ها</h5>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='/Teachers' className={style.footer_menuItem_link}>لیست مدرسین</Link>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='' className={style.footer_menuItem_link}>ویژگی جذاب</Link>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='' className={style.footer_menuItem_link}>المان</Link>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='' className={style.footer_menuItem_link}>نظرات کاربران</Link>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='' className={style.footer_menuItem_link}>ویدیو</Link>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='' className={style.footer_menuItem_link}>فوتر</Link>
                </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <ul className={style.footer_menuItems}>
                <li className={style.footer_menuItem}>
                    <h5 className={style.footer_title}>لینک های مفید</h5>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='' className={style.footer_menuItem_link}>درباه ما</Link>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='' className={style.footer_menuItem_link}>بلاگ</Link>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='' className={style.footer_menuItem_link}>قیمت گذاری</Link>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='' className={style.footer_menuItem_link}>ثبت نام</Link>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='' className={style.footer_menuItem_link}>ورود به حساب</Link>
                </li>
                <li className={style.footer_menuItem}>
                    <Link href='' className={style.footer_menuItem_link}>پشتبانی</Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
