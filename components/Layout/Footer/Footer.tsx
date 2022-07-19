import React from 'react'
import {FooterProps} from './Footer.props'
import styles from './Footer.module.scss'
import cn from "classnames";
import SocialList from "../../SocialList/SocialList";
import ImageMiniList from "../../ImageMiniList/ImageMiniList";

const Footer = ({...props}: FooterProps): JSX.Element => {
    const date = new Date()
    return (
        <footer className={styles.footer}>
            <div className={styles.pageHeader_wrapper}>
                <div className={cn(styles.pageHeader__social, styles.social)}>
                    <SocialList/>
                </div>
                <div className={styles.image_mini}>
                    <ImageMiniList/>
                </div>
            </div>
                <p> ©{date.getFullYear()} FineStory</p>
                <p>Designed by <a
                    href="https://themeforest.net/item/photoghor-creative-photographer-psd-template/19047630?_ga=2.107810306.1886427271.1601295426-525930995.1601295396">99Shopify</a>
                </p>
        </footer>
    )
}

export default Footer
