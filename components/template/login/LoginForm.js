import React from 'react';
import style from '@/styles/login/LoginForm.module.css'
import Link from 'next/link';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons"

function LoginForm() {
  return (
    <section className={style.loginForm}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={style.loginForm_wrapper}>
                        <div className={style.loginForm_imageIcon}>
                            <img src="/images/login.jpg" alt="login page" className={style.loginForm_img} />
                            <span className={style.loginForm_icon}>
                                <FontAwesomeIcon icon={faLock}/>
                            </span>
                        </div>
                        <form action="#" className="form">
                            <h3 className="form_title">ورود به حساب کاربری</h3>
                            <div className="formBox">
                                <label htmlFor="" className="formBox_label">نام کاربری</label>
                                <input type="text" className="formBox_input" placeholder='support@gmail.com'/>
                            </div>
                            <div className={style.formBox}>
                                <label htmlFor="" className="formBox_label">رمز عبور</label>
                                <input type="text" className="formBox_input" placeholder='support@gmail.com'/>
                            </div>
                            <button className="formBox_btn">ورود</button>
                                <div className="formBox_links">
                                    <Link href='' className="formBox_links">ثبت نام</Link>
                                    <Link href='' className="formBox_links">رمز عبور فراموش کرده  اید؟</Link>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LoginForm