import React, {useEffect, useState} from 'react'
import styles from './VideoList.module.scss'
import Modal from "../Modal/Modal"
import ReactPlayer from "react-player/lazy"
import {VideosProps} from "../../interfaces/portfolio.interface"
import List from "../List/List"
import Image from "next/image"
import {getStrapiMedia} from "../../lib/media"

const VideoList = ({videos}: VideosProps): JSX.Element => {
    const [modalActive, setModalActive] = useState(false)
    const[videoUrl, setVideoUrl] = useState('')

    useEffect(() => {
        const close = (e:any) => {
            if(e.keyCode === 27){
                setModalActive(false)
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    },[])

    return (
        <section className={styles.video}>
            <h2 className="visually-hidden">Видео</h2>
            <div className={styles.content}>
                <List
                    items={videos}
                    renderItem={(video) =>
                        (<li key={video.id} onClick={() => {
                            setModalActive(true)
                            setVideoUrl(video.attributes.URL)
                        }} className={styles.list__item}><a>
                            <Image
                                src={getStrapiMedia(video.attributes.image.data.attributes)}
                                width={400}
                                height={225}
                                placeholder="blur"
                                blurDataURL={getStrapiMedia(video.attributes.image.data.attributes.formats.xsmall)}
                                alt={video.attributes.image.data.attributes.alternativeText}
                            /></a></li>)}
                    className={styles.list}/>
                <Modal active={modalActive} setActive={setModalActive}>
                    <ReactPlayer
                        url={modalActive ? videoUrl : ''}
                        width={720}
                        height={405}
                        playing={modalActive}
                        controls={true}
                    />
                </Modal>
            </div>
        </section>
    )
}

export default VideoList
