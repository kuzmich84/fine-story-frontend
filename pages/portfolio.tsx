import Layout from "../components/Layout/Layout"
import styles from "../styles/pages-styles/Portfolio.module.scss"
import cn from "classnames"
import VideoList from "../components/VideoList/VideoList"
import Head from "next/head"

const Portfolio = (): JSX.Element => {
    return (
        <Layout>
            <Head>
                <title>Портфолио</title>
            </Head>
            <section className={styles.main}>
                <div className={cn(styles.content, "container")}>
                    <h1 className="visually-hidden">Портфолио</h1>
                    <section className={styles.portfolio}>
                        <ul className={styles.list}>
                            <li className={styles.list__item}><a href="#">Все</a></li>
                            <li className={cn(styles.list__item, styles.list__itemActive)}><a href="#">Свадебное</a>
                            </li>
                            <li className={styles.list__item}><a href="#">Детское</a></li>
                            <li className={styles.list__item}><a href="#">Коммерческое</a></li>
                        </ul>
                        <div className={styles.title}>
                            <h2>Последние работы</h2>
                            <p>Видео</p>
                        </div>
                    </section>
                    <VideoList/>
                </div>
            </section>
        </Layout>

    )
}

export default Portfolio