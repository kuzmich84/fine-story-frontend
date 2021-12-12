import React from 'react'
import {PostCardProps} from './PostCard.props'
import styles from './PostCard.module.scss'
import Link from "next/link"
import Image from "../Image/Image"
import ReactMarkdown from "react-markdown"
import cn from "classnames"

const PostCard = ({image, title, excerpt, slug, date, views}: PostCardProps): JSX.Element => {
    return (
        <article className={styles.item}>
            <div className={styles.miniature}>
                <Image image={image} layout="fill"/>
            </div>
            <div className={styles.card}>
                <h2 className={styles.title}><span>{title}</span></h2>
                <div className={styles.desc}>
                    <ReactMarkdown>{excerpt}</ReactMarkdown>
                </div>
                <Link href={`/posts/${slug}`}><a className={cn("btn", styles.readMore)}>Читать далее</a></Link>
                <div className={styles.footer}>
                    <div className={styles.date}>
                        <svg width="20" height="20">
                            <use xlinkHref="img/sprite.svg#calendar"/>
                        </svg>
                        <span>{date}</span>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.views}>
                            <svg width="20" height="20">
                                <use xlinkHref="img/sprite.svg#eye"/>
                            </svg>
                            <span>{views}</span>
                        </div>
                        <div className={styles.reviews}>
                            <svg width="20" height="20">
                                <use xlinkHref="img/sprite.svg#review"/>
                            </svg>
                            <span>19</span>
                        </div>
                    </div>
                </div>
            </div>

        </article>
    )
}

export default PostCard
