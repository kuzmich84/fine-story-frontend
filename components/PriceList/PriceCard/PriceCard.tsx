import React from 'react'
import {PriceCardProps} from './PriceCard.props'
import styles from './PriceCard.module.scss'
import ReactMarkdown from "react-markdown"
import {getStrapiMedia} from "../../../lib/media"

const PriceCard = ({image, title, price, content, iconWidth, iconHeight}: PriceCardProps): JSX.Element => {
    console.log(image)
    return (
        <li className={styles.list__item}>
            <img src={getStrapiMedia(image)} width="34px" height="34px" alt="фото"/>
            <h3>{title}</h3>
            <h4>{price} руб.</h4>
            <ReactMarkdown>
                {content}
            </ReactMarkdown>
        </li>
    )
}

export default PriceCard
