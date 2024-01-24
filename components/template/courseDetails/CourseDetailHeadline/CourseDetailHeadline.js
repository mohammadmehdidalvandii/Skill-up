import React, { useState } from "react";
import style from "@/styles/courseDetails/CourseDetailHeadline.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function CourseDetailHeadline() {
  const [headlineCourse, setHeadlineCourse] = useState(false);

  const handlerHeadlineCourse = () => {
    setHeadlineCourse(!headlineCourse);
  };
  return (
    <section className={style.courseDetailHeadline}>
      <div className="row">
        <div className="col-12">
          <div className={style.courseDetailHeadline_content}>
            <h6 className={style.courseDetail_title}>
              آموزش کار با Premiere Pro
            </h6>

            <div className={style.courseDetailHeadline_headline}>
              <div
                className={style.courseDetailHeadline_headline_titleIcon}
                onClick={handlerHeadlineCourse}
              >
                <span className={style.courseDetailHeadline_headline_title}>
                  مقدمه و معرفی دوره
                </span>
                <span className={style.courseDetailHeadline_headline_icon}>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </div>

              <div
                className={style.courseDetailHeadline_wrapper}
                style={{ display: headlineCourse ? "block" : "none " }}
              >    
              <div className={style.courseDetailHeadline_headline_LinkIcon}>
                <span
                  className={style.courseDetailHeadline_headline_linkIcon_icon}
                >
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <Link
                  href=""
                  className={style.courseDetailHeadline_headline_LinkIcon_link}
                >
                  نحوه ایمپورت کردن فایل‌ها و مرتب سازی آنها
                </Link>
              </div>
              <div className={style.courseDetailHeadline_headline_LinkIcon}>
                <span
                  className={style.courseDetailHeadline_headline_linkIcon_icon}
                >
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <Link
                  href=""
                  className={style.courseDetailHeadline_headline_LinkIcon_link}
                >
                  نحوه ایمپورت کردن فایل‌ها و مرتب سازی آنها
                </Link>
              </div>
              <div className={style.courseDetailHeadline_headline_LinkIcon}>
                <span
                  className={style.courseDetailHeadline_headline_linkIcon_icon}
                >
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <Link
                  href=""
                  className={style.courseDetailHeadline_headline_LinkIcon_link}
                >
                  نحوه ایمپورت کردن فایل‌ها و مرتب سازی آنها
                </Link>
              </div>
              <div className={style.courseDetailHeadline_headline_LinkIcon}>
                <span
                  className={style.courseDetailHeadline_headline_linkIcon_icon}
                >
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <Link
                  href=""
                  className={style.courseDetailHeadline_headline_LinkIcon_link}
                >
                  نحوه ایمپورت کردن فایل‌ها و مرتب سازی آنها
                </Link>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetailHeadline;
