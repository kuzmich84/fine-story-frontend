import React from 'react'
import { VideoListProps } from './VideoList.props'
import styles from './VideoList.module.scss'

const VideoList = ({...props}: VideoListProps): JSX.Element => {
  return (
      <section className={styles.video}>
        <h2 className="visually-hidden">Видео</h2>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li className={styles.list__item}><a href="#"><img src="/img/Stasya-Alexey.jpg"
                                                              width="400" height="225"
                                                              alt="Свадебная съемка"/></a></li>
            <li className={styles.list__item}><a href="#"><img src="/img/Elena-Konstantin.jpg"
                                                              width="400" height="225"
                                                              alt="Свадебная съемка"/></a></li>
            <li className={styles.list__item}><a href="#"><img src="/img/Marina-Vladimir.jpg"
                                                              width="400" height="225"
                                                              alt="Свадебная съемка"/></a></li>
            <li className={styles.list__item}><a href="#"><img src="/img/Roman-Viktoriya.jpg"
                                                              width="400" height="225"
                                                              alt="Свадебная съемка"/></a></li>
            <li className={styles.list__item}><a href="#"><img src="/img/Alesya-Ivan.jpg" width="400"
                                                              height="225"
                                                              alt="Свадебная съемка"/></a></li>
            <li className={styles.list__item}><a href="#"><img src="/img/Natalia-Anton.jpg"
                                                              width="400" height="225"
                                                              alt="Свадебная съемка"/></a></li>
            <li className={styles.list__item}><a href="#"><img src="/img/Katya-Oleg.jpg" width="400"
                                                              height="225"
                                                              alt="Свадебная съемка"/></a></li>
            <li className={styles.list__item}><a href="#"><img src="/img/Yura-Galya.jpg" width="400"
                                                              height="225"
                                                              alt="Свадебная съемка"/></a></li>

            <li className={styles.list__item}><a href="#"><img src="/img/Katya-Igor.jpg" width="400"
                                                              height="225"
                                                              alt="Свадебная съемка"/></a></li>
          </ul>
        </div>
      </section>
  );
};

export default VideoList
