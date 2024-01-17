import React, { useEffect, useState } from 'react'
import style from '@/styles/navbar/Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [menuActive , setMenuActive] = useState('/')
    const [isShowMenu , setIsShowMenu] = useState(false)
    const location = useRouter()
    // start handler menuActive Navbar
        useEffect(()=>{
            const pathName = location.pathname
            setMenuActive(pathName)
            window.scroll(0 , 0)
            setIsShowMenu(false)
        },[location])
    // End handler menuActive Navbar

    // Start show Handler Menu
    const handlerShowMenu = ()=>{
        setIsShowMenu(!isShowMenu)
    }
    // End show Handler Menu

  return (
    <>
    {/* Start Section navbar  */}
        <section className={style.navbar}>
            <div className="container">
                <div className={style.navbar_wrapper}>
                    <div className={style.navbar_right}>
                        <Link href='/' className={style.navbar_logoLink}>
                            <img src="/images/logo.png" alt="logo image" className={style.navbar_logo} />
                        </Link>
                        <ul className={style.navbar_menu_items}>
                            <li className={style.navbar_item}>
                                <Link href='/' className={`${style.navbar_item_link} ${menuActive === '/' ? `${style.navbar_item_linkActive}` : ``}`}>
                                    خانه 
                                </Link>
                            </li>
                            <li className={style.navbar_item}>
                                <Link href='' className={`${style.navbar_item_link} ${menuActive === '' ? `${style.navbar_item_linkActive}` : ``}`}>
                                    دوره های ما
                                </Link>
                            </li>
                            <li className={style.navbar_item}>
                                <Link href='' className={`${style.navbar_item_link} ${menuActive === '' ? `${style.navbar_item_linkActive}` : ``}`}>
                                    فروشگاه
                                </Link>
                            </li>
                            <li className={style.navbar_item}>
                                <Link href='' className={`${style.navbar_item_link} ${menuActive === '' ? `${style.navbar_item_linkActive}` : ``}`}>
                                    درباه ما
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.navbar_left}>
                        <div className={style.navbar_wrapper_link}>
                            <Link href='' className={`${style.navbar_link} ${menuActive === '' ? `${style.navbar_linkActive}` : ``}`}>ورود</Link>
                            <Link href='' className={`${style.navbar_link} ${menuActive === '' ? `${style.navbar_linkActive}` : ``}`}>ثبت نام</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     {/* End Section navbar */}

     {/* Start Section navbar-Res */}
     <section className={style.navbarRes}>
        <div className="container">
            <div className={style.navbarRes_wrapper}>
                <div className={style.navbarRes_right}>
                    <div className={style.navbarRes_icons}>
                        <span className={style.navbarRes_icon} onClick={handlerShowMenu}>
                            <FontAwesomeIcon icon={faBars}/>
                        </span>
                    </div>

                    <div className={style.navbarRes_right_menu} style={{display: isShowMenu ? "block" : "none"}}>
                        <ul className={style.navbarRes_menu_items}>
                            <li className={style.navbarRes_menu_item}>
                                <Link href='/' className={`${style.navbarRes_menu_link} ${menuActive === '/' ? `${style.navbarRes_menu_linkActive}` : ``}`}>
                                    خانه
                                </Link>
                            </li>
                            <li className={style.navbarRes_menu_item}>
                                <Link href='' className={`${style.navbarRes_menu_link} ${menuActive === '' ? `${style.navbarRes_menu_linkActive}` : ``}`}>
                                    دوره های آموزشی
                                </Link>
                            </li>
                            <li className={style.navbarRes_menu_item}>
                                <Link href='' className={`${style.navbarRes_menu_link} ${menuActive === '' ? `${style.navbarRes_menu_linkActive}` : ``}`}>
                                    فروشگاه
                                </Link>
                            </li>
                            <li className={style.navbarRes_menu_item}>
                                <Link href='' className={`${style.navbarRes_menu_link} ${menuActive === '' ? `${style.navbarRes_menu_linkActive}` : ``}`}>
                                    
                                </Link>
                            </li>
                            <li className={style.navbarRes_menu_item}>
                                <Link href='' className={`${style.navbarRes_menu_link} ${menuActive === '' ? `${style.navbarRes_menu_linkActive}` : ``}`}>
                                    درباه ما
                                </Link>
                            </li>
                            <li className={style.navbarRes_menu_item}>
                                <Link href='' className={`${style.navbarRes_menu_link} ${menuActive === '' ? `${style.navbarRes_menu_linkActive}` : ``}`}>
                                        ورود
                                </Link>
                            </li>
                            <li className={style.navbarRes_menu_item}>
                                <Link href='' className={`${style.navbarRes_menu_link} ${menuActive === '' ? `${style.navbar_item_linkActive}` : ``}`}>
                                    ثبت نام
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.navbarRes_left}>
                        <Link href='/' className={style.navbar_logoLink}>
                            <img src="/images/logo.png" alt="logo image" className={style.navbar_logo} />
                        </Link>
                </div>
            </div>
        </div>
     </section>
     {/* End Section navbar-Res */}
    </>
  )
}

export default Navbar