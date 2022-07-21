import {fetchAPI} from "../../lib/api"
import {GetStaticPropsContext} from "next"
import {DatumCategories} from "../../interfaces/video-categories.interface"
import {IPosts} from "../../interfaces/posts.interface"
import Layout from "../../components/Layout/Layout"
import PostCard from "../../components/PostCard/PostCard"
import styles from "../../styles/pages-styles/Blog.module.scss";


const Category = ({articles}: IPosts): JSX.Element => {
    console.log(articles)

    return (
        <Layout>
            <section className={styles.articles}>
                <div className="container">
                    <div className={styles.content}>
                        <h2>Категория статей</h2>
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
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticPaths() {
    const videoCategoriesRes = await fetchAPI("/categories", {fields: ["slug"]})

    return {
        paths: videoCategoriesRes.data.map((videoCategory: DatumCategories) => ({
            params: {
                slug: videoCategory.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({params}: GetStaticPropsContext) {
    if (!params) {
        return {
            notFound: true
        }
    }

    const videoRes = await fetchAPI("/articles", {
        filters: {
            category: {
                slug: params.slug
            },
        },
        populate: "*",
    })


    return {
        props: {
            articles: videoRes.data
        }
    }

}

export default Category

