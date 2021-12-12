import React from 'react'
import {ImageProps} from './Image.props'
import NextImage from "next/image"
import styles from './Image.module.scss'
import {getStrapiMedia} from "../../lib/media"


const Image = ({image, layout = 'fill', style}: ImageProps): JSX.Element => {
    const {alternativeText, formats} = image
    return (
        <NextImage
            layout={layout}
            src={getStrapiMedia(image)}
            placeholder="blur"
            blurDataURL={getStrapiMedia(formats.xsmall)}
            className={styles.image}
            alt={alternativeText || "фото"}
            objectFit="cover"
        />
    )
}

export default Image
