import Head from 'next/head'
import styles from '../styles/pages-styles/Home.module.scss'
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import {fetchAPI} from "../lib/api"
import {RootObject} from "../interfaces/IrootObject"

const Home = ({homepage}: RootObject): JSX.Element => {
    return (
        <Layout>
            <Seo seo={homepage.attributes.seo}/>
            <Head>
                <title>Fine-Story. Свадебная съемка в Санкт-Петербурге</title>
            </Head>
            <section className="page-main">
                <div className={styles.main__content}>
                    <h1 className="visually-hidden">Видеосъемка в Санкт-Петербурге</h1>
                    <div className={styles.welcome}>
                        <h2 className={styles.welcome__title}>Я, Дмитрий Кучуков</h2>
                        <p className={styles.welcome__text}>видеограф</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    // Run API calls in parallel
    const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
        fetchAPI("/articles", {populate: "*"}),
        fetchAPI("/categories", {populate: "*"}),
        fetchAPI("/homepage", {populate: "*"}),
    ])

    return {
        props: {
            articles: articlesRes.data,
            categories: categoriesRes.data,
            homepage: homepageRes.data,
        },
        revalidate: 1,
    }
}

export default Home
