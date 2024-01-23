import React from 'react';
import style from '@/styles/commentCard/CommentCard.module.css'

function CommentCard() {
  return (
    <div className={style.commentCard}>
    <div className={style.commentCard_profile_image}>
        <div className={style.commentCard_image}>
            <img src="/images/user-1.jpg" alt="logo comment" className={style.commentCard_img} />
        </div>
        <div className={style.commentCard_info}>
             <h6 className={style.commentCard_name}>الهام نجفی</h6>
             <span className={style.commentCard_job}>مشاوره مارکتینگ دیجیکالا</span>
        </div>
    </div>
    <p className={style.commentCard_desc}>
    زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
    </p>    
</div> 
  )
}

export default CommentCard