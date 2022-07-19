import Layout from "../../components/Layout/Layout"
import styles from "../../styles/pages-styles/Portfolio.module.scss"
import cn from "classnames"
import VideoList from "../../components/VideoList/VideoList"
import Head from "next/head"
import axios from "axios"
import {VideosProps} from "../../interfaces/portfolio.interface"
import List from "../../components/List/List"
import Link from "next/link"
import {useRouter} from "next/router"


const Portfolio = ({videos, videoCategories}: VideosProps): JSX.Element => {
    const r = useRouter()
    const currentCategory = videoCategories.find(i => i.attributes.slug === r.query.slug)


    return (
        <Layout>
            <Head>
                <title>Портфолио</title>
            </Head>
            <section className={styles.main}>
                <div className={cn(styles.content, "container")}>
                    <h1 className="visually-hidden">Портфолио</h1>
                    <section className={styles.portfolio}>
                        <List
                            className={styles.list}
                            items={videoCategories}
                            renderItem={(videoCategory =><li className={cn(styles.list__item, {
                                [styles.list__itemActive]: true
                            })} key={videoCategory.attributes.slug}><Link href={`/portfolio/${videoCategory.attributes.slug}`}><a>{videoCategory.attributes.name}</a></Link></li>)}/>
                        <div className={styles.title}>
                            {!currentCategory && <h2>Последние работы</h2>}
                            <h3>Видео</h3>
                            <p>Категория: {currentCategory ? currentCategory.attributes.name : 'все'} </p>
                        </div>
                    </section>
                    <VideoList videos={videos} videoCategories={videoCategories}/>
                </div>
            </section>
        </Layout>

    )
}

export async function getStaticProps() {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/videos`, {
            params: {
                populate: "*",
                'sort': 'date:desc'
            }
        })

        const videoCategoriesRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/video-categories`, {
            params: {
                'sort': 'id:asc'
            }
        })


        const videos = await res.data.data
        const videoCategories = await videoCategoriesRes.data.data


        return {
            props: {
                videos,
                videoCategories
            },
        }
    } catch {
        return {
            notFound: true
        }
    }

}

export default Portfolio