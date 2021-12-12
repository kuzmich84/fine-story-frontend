import React from 'react'
import {FooterProps} from './Footer.props'
import styles from './Footer.module.scss'

const Footer = ({...props}: FooterProps): JSX.Element => {
    const date = new Date()
    return (
        <footer className={styles.footer}>
                <p> ©{date.getFullYear()} FineStory</p>
                <p>Designed by <a
                    href="https://themeforest.net/item/photoghor-creative-photographer-psd-template/19047630?_ga=2.107810306.1886427271.1601295426-525930995.1601295396">99Shopify</a>
                </p>
        </footer>
    )
}

export default Footer
