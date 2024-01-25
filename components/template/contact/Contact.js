import React from 'react';
import style from '@/styles/contact/Contact.module.css'

function Contact() {
  return (
    <section className={style.contact}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <form action="#" className={style.contact_form}>
                        <h6 className={style.contact_form_title}>با ما در ارتباط باشید</h6>
                        <span className={style.contact_form_text}>پیام بفرستید تا حد امکان پاسخگو خواهیم بود...</span>
                        <div className={style.contact_formBox}>
                            <label htmlFor="" className={style.contact_formBox_label}>نام و نام خانوادگی</label>
                            <input type="text" className={style.contact_formBox_input} placeholder='نام و نام خانوادگی'/>
                        </div>
                        <div className={style.contact_formBox}>
                            <label htmlFor="" className={style.contact_formBox_label}>شماره تماس</label>
                            <input type="text" className={style.contact_formBox_input} placeholder='شماره تماس '/>
                        </div>
                        <div className={style.contact_formBox}>
                            <label htmlFor="" className={style.contact_formBox_label}>ایمیل</label>
                            <input type="text" className={style.contact_formBox_input} placeholder='ایمیل'/>
                        </div>
                        <div className={style.contact_formBox}>
                            <label htmlFor="" className={style.contact_formBox_label}>موضوع</label>
                            <input type="text" className={style.contact_formBox_input} placeholder='موضوع'/>
                        </div>
                        <textarea className={style.contact_formBox_text} placeholder='درخواست شما'></textarea>
                        <button className={style.contact_formBox_btn}>ارسال</button>
                    </form>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <ul className={style.contact_items}>
                        <li className={style.contact_item}>
                            <h6 className={style.contact_item_title}>
آدرس ما</h6>
                            <span className={style.contact_item_text}>ایران، تهران،</span>
                            <span className={style.contact_item_text}>میدان آزادی، جنب مترو شادمان</span>
                            <span className={style.contact_item_text}>مجتمع صدف پلاک 8</span>
                        </li>
                        <li className={style.contact_item}>
                            <h6 className={style.contact_item_title}>پست الکترونیکی</h6>
                            <span className={style.contact_item_text}>support@example.com</span>
                            <span className={style.contact_item_text}>example@gmail.com</span>
                        </li>
                        <li className={style.contact_item}>
                            <h6 className={style.contact_item_title}>+91 235 548 7548</h6>
                            <span className={style.contact_item_text}>(41) 123 521 458</span>
                            <span className={style.contact_item_text}>+91 235 548 7548</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12964.035018914681!2d51.37892281675605!3d35.67678642487583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1659772013337!5m2!1sfa!2s" frameborder="0" className={style.contact_googleMap} ></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact