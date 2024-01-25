import React from "react";
import style from "@/styles/courseDetails/CourseDetailTeacher.module.css";
import Link from "next/link";

function CourseDetailTeacher() {
  return (
    <section className={style.courseDetailTeacher}>
      <div className="row">
        <div className="col-12">
          <Link href='' className={style.courseDetailTeacher_content}>
            <img
              src="/images/user-1.jpg"
              alt="userimage"
              className={style.courseDetailTeacher_img}
            />
            <div className={style.courseDetailTeacher_info}>
              <h6 className={style.courseDetailTeacher_name}>الهام حسینی</h6>
              <p className={style.courseDetailTeacher_desc}>
                تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
                رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                گیرد.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CourseDetailTeacher;
