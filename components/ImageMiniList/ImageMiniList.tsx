import React from 'react'
import { ImageMiniListProps } from './ImageMiniList.props'
import styles from './ImageMiniList.module.scss'

const ImageMiniList = ({...props}: ImageMiniListProps): JSX.Element => {
  return (
      <ul className={styles.image_mini__list}>
        <li className={styles.image_mini__item}><a href="#"><img
            src="http://picsum.photos/77/77?r=${Math.random()}" alt="Фото"/></a></li>
        <li className={styles.image_mini__item}><a  href="#"><img
            src="http://picsum.photos/77/77?r=${Math.random()+1}" alt="Фото"/></a></li>
        <li className={styles.image_mini__item}><a href="#"><img
            src="http://picsum.photos/77/77?r=${Math.random()+2}" alt="Фото"/></a></li>
        <li className={styles.image_mini__item}><a  href="#"><img
            src="http://picsum.photos/77/77?r=${Math.random()+3}" alt="Фото"/></a></li>
        <li className={styles.image_mini__item}><a  href="#"><img
            src="http://picsum.photos/77/77?r=${Math.random()+4}" alt="Фото"/></a></li>
      </ul>
  );
};

export default ImageMiniList
