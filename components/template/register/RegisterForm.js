import React from 'react';
import style from '@/styles/register/RegisterForm.module.css'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons"

import Link from 'next/link';

function RegisterForm() {
  return (
   <section className={style.registerForm}>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className={style.registerForm_wrapper}>
                     <div className={style.registerForm_imageIcon}>
                            <img src="/images/login.jpg" alt="login page" className={style.register_img} />
                            <span className={style.register_icon}>
                                <FontAwesomeIcon icon={faLock}/>
                            </span>
                     </div>
                     <form action="#" className="form">
                            <h3 className="form_title">ورود به حساب کاربری</h3>
                            <div className="formBox">
                                <label htmlFor="" className="formBox_label">نام </label>
                                <input type="text" className="formBox_input" placeholder='support@gmail.com'/>
                            </div>
                            <div className="formBox">
                                <label htmlFor="" className="formBox_label">نام خانوادگی</label>
                                <input type="text" className="formBox_input" placeholder='support@gmail.com'/>
                            </div>
                            <div className="formBox">
                                <label htmlFor="" className="formBox_label">ایمیل</label>
                                <input type="text" className="formBox_input" placeholder='support@gmail.com'/>
                            </div>
                            <div className={style.formBox}>
                                <label htmlFor="" className="formBox_label">رمز عبور</label>
                                <input type="text" className="formBox_input" placeholder='support@gmail.com'/>
                            </div>
                            <button className="formBox_btn">ورود</button>
                                <div className="formBox_links">
                                    <Link href='/Login' className="formBox_links">ورود</Link>
                                </div>
                        </form>

                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default RegisterForm