import React, {useState} from 'react'
import {LayoutProps} from './Layout.props'
import IconMenuBurger from "../Icons/Icon-menu-burger"
import SocialList from "../SocialList/SocialList"
import ImageMiniList from "../ImageMiniList/ImageMiniList"
import styles from "./Layout.module.scss"
import cn from "classnames"
import Menu from "./Menu/Menu"
import Footer from "./Footer/Footer"
import IconArrowUp from "../Icons/Icon-arrow-up"
import {useRouter} from 'next/router'
import IconClose from "../Icons/Icon-close";
import IconMenuClose from "../Icons/Icon-menu-close";

const Layout = ({children, seo}: LayoutProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const clickHandleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <button type="button" className="mobile-nav-toggle" onClick={clickHandleMenu}>
                {isOpen && <IconMenuClose fill="#33cc99" width={50} height={50}/>}
                {!isOpen && <IconMenuBurger/>}
            </button>
            {isOpen && (
                <div className="mobile-nav">
                    <Menu/>
                </div>
            )}
            <div className={styles.content}>
                <header className={styles.pageHeader}>
                    <div className={styles.pageHeader_content}>
                        <div className={styles.pageHeader__logo}>
                            <img src="/img/logo.png" width="213" height="92" alt="Логотип"/>
                        </div>
                        <Menu/>
                    </div>
                </header>
                <main className="main">{children}</main>
            </div>
            <Footer/>
            <a href="#" className="back-to-top">
                <IconArrowUp fill="#FFFFFF" width={16} height={16}/>
            </a>
        </>

    )
}

export default Layout
