import React from 'react'
import {SocialListProps} from './SocialList.props'
import styles from './SocialList.module.scss'
import IconVk from "../Icons/Icon-vk"
import IconInstagram from "../Icons/Icon-instagram"
import IconFacebook from "../Icons/Icon-facebook"
import IconYouTube from "../Icons/Icon-youtube"

const componentIcons = [
    <IconVk fill="#FFFFFF" width={15} height={20}/>,
    <IconInstagram fill="#FFFFFF" width={15} height={20}/>,
    <IconFacebook fill="#FFFFFF" width={15} height={20}/>,
    <IconYouTube fill="#FFFFFF" width={15} height={20}/>
]

const SocialList = ({...props}: SocialListProps): JSX.Element => {
    return (
        <ul className={styles.social__list}>
            {componentIcons.map((item, index) => (
                <li key={index} className={styles.social__item}><a className={styles.social__link} href="#"
                                                                   aria-label="Мы в социальных сетях">
                    {item}
                </a></li>
            ))}

        </ul>
    )
}

export default SocialList
