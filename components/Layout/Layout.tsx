import React from 'react'
import {LayoutProps} from './Layout.props'
import IconMenuBurger from "../Icons/Icon-menu-burger"
import SocialList from "../SocialList/SocialList"
import ImageMiniList from "../ImageMiniList/ImageMiniList"
import styles from "./Layout.module.scss"
import cn from "classnames"
import Menu from "./Menu/Menu"
import Footer from "./Footer/Footer"
import IconArrowUp from "../Icons/Icon-arrow-up"
import { useRouter } from 'next/router'

const Layout = ({children, seo}: LayoutProps): JSX.Element => {
    return (
        <>
            <button type="button" className="mobile-nav-toggle">
                <IconMenuBurger/>
            </button>
            <header className={styles.pageHeader}>
                <div className={styles.pageHeader_content}>
                    <div className={styles.pageHeader__logo}>
                        <img src="/img/logo.png" width="213" height="92" alt="Логотип"/>
                    </div>
                    <Menu/>
                    <div className={styles.pageHeader_wrapper}>
                        <div className={cn(styles.pageHeader__social, styles.social)}>
                            <SocialList/>
                        </div>
                        <div className={styles.image_mini}>
                            <ImageMiniList/>
                        </div>
                    </div>
                </div>
            </header>
            <main className="main">{children}</main>
            <Footer/>
            <a href="#" className="back-to-top">
                <IconArrowUp fill="#FFFFFF" width={16} height={16}/>
            </a>
        </>

    )
}

export default Layout
