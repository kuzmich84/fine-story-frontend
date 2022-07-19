import Layout from "../../components/Layout/Layout"
import styles from "../../styles/pages-styles/Blog.module.scss"
import cn from "classnames"
import Link from "next/link"
import {fetchAPI} from "../../lib/api"
import {GetServerSideProps, GetStaticProps} from "next"
import {IPosts} from "../../interfaces/posts.interface"
import PostCard from "../../components/PostCard/PostCard"
import {useRouter} from "next/router"
import Seo from "../../components/seo"


const Blog = ({articles, page, countPages}: IPosts): JSX.Element => {
    const router = useRouter()

    // @ts-ignore
    return (
        <Layout>
            <Seo seo={articles.seo}/>
            <section className={styles.articles}>
                <div className="container">
                    <div className={styles.content}>
                        <h2><span>Наш блог</span></h2>
                        {articles.map((article) => {
                            return (
                                <PostCard
                                    key={article.id}
                                    image={article.attributes.thumbnail.data.attributes}
                                    title={article.attributes.title}
                                    excerpt={article.attributes.excerpt}
                                    slug={article.attributes.slug}
                                    date={article.attributes.date}
                                    views={article.attributes.views}
                                />
                            )
                        })}
                        <ul className={styles.list}>
                            <Link href={`posts?page=${page - 1}`}>
                                <li
                                    className={cn(styles.list__item, styles.list__itemPrev, {
                                        [styles.list_disable]: page <= 1,
                                        [styles.list__itemActive]: page !== 1
                                    })}><a/></li>
                            </Link>

                            {Array(countPages).fill('*').map((e, i) =>
                                <Link href={`posts?page=${i + 1}`} key={i}>
                                    <li
                                        className={cn(styles.list__item, {
                                            [styles.list__itemActive]: router.asPath === `/posts?page=${i + 1}`

                                        })}>
                                        <a><span>{i + 1}</span></a></li>
                                </Link>)}
                            <Link href={`posts?page=${page + 1}`}>
                                <li
                                    className={cn(styles.list__item, styles.list__itemNext, {
                                        [styles.list_disable]: page === countPages,
                                        [styles.list__itemActive]: page !== countPages
                                    })}>
                                    <a/></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>

    )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const {page = 1} = query
    const start = +page === 1 ? 0 : (+page - 1) * 2
    const limit = 2

    const [articlesRes, categoriesRes] = await Promise.all([
        fetchAPI(`/articles`, {
            populate: "*",
            'sort': 'date:desc',
            'pagination[start]': `${start}`,
            'pagination[limit]': `${limit}`
        }),
        fetchAPI("/categories", {populate: "*"}),
    ])

    const countPages = Math.ceil(articlesRes.meta.pagination.total / limit)


    if (!articlesRes || !categoriesRes) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            articles: articlesRes.data,
            categories: categoriesRes.data,
            countPages: countPages,
            page: +page
        }
    }
}

export default Blog