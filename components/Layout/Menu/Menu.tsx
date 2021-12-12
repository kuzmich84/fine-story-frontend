import React from 'react'
import {MenuProps} from './Menu.props'
import styles from './Menu.module.scss'
import Link from "next/link"
import cn from "classnames"
import {useRouter} from "next/router"

const menu = [
    {
        title: 'ГЛАВНАЯ',
        url: '/',
    },
    {
        title: 'ПОРТФОЛИО',
        url: '/portfolio',
    },
    {
        title: 'О НАС',
        url: '/about',
    },
    {
        title: 'УСЛУГИ И ЦЕНЫ',
        url: '/price',
    },
    {
        title: 'БЛОГ',
        url: '/posts?page=1',
    },
    {
        title: 'КОНТАКТЫ',
        url: '/contacts',
    }
]

const Menu = ({...props}: MenuProps): JSX.Element => {
    const router = useRouter()

    const handleClick = (e:any) => {
        e.preventDefault()
        router.push(e.target.getAttribute('href'))
    }
    return (
        <nav>
            <ul className={styles.siteList}>
                {menu.map((item, idx) => {
                    return (
                        <li  key={item.url} className={cn(styles.siteList__item, {
                            [styles.siteList__itemCurrent]: router.asPath === item.url
                        })}>
                            <Link href={item.url}>
                                <a onClick={handleClick} className={styles.siteList__link}>{item.title}</a>
                            </Link>
                        </li>

                    )
                })}
            </ul>
        </nav>
    )
}

export default Menu
