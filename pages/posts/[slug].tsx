import Layout from "../../components/Layout/Layout"
import styles from "../../styles/pages-styles/Post.module.scss"
import IconCalendar from "../../components/Icons/Icon-calendar"
import IconEye from "../../components/Icons/Icon-eye"
import {fetchAPI} from "../../lib/api"
import {IPost} from "../../interfaces/post.interface"
import {GetStaticProps} from "next"
import ReactMarkdown from "react-markdown"
import NextImage from "next/image"
import {getStrapiMedia} from "../../lib/media"
import CategoryList from "../../components/CategoryList/CategoryList"


const Post = ({article, categories}: IPost): JSX.Element => {
    console.log(categories.data)
    const {title, text} = article.attributes
    return (
        <Layout>
            <article className="article">
                <div className="container">
                    <div className={styles.container}>
                        <div className={styles.wrapper}>
                            <div className={styles.content}>
                                <NextImage
                                    src={getStrapiMedia(article.attributes.image.data[0].attributes.formats.large)}
                                    width={1000}
                                    height={600}
                                    objectFit="cover"
                                    objectPosition="top center"
                                />
                                <div className={styles.textWrapper}>
                                    <h2>{title}</h2>
                                    <div className={styles.footer}>
                                        <div className={styles.date}>
                                            <IconCalendar fill="#717171" width={20} height={20}/>
                                            <span>25 апреля 2020</span>
                                        </div>
                                        <div className={styles.views}>
                                            <IconEye fill="#717171" width={20} height={20}/>
                                            <span>59</span>
                                        </div>
                                    </div>

                                    <div className={styles.text}>
                                        <ReactMarkdown>{text}</ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.sidebar}>
                                <CategoryList data={categories.data}/>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const articlesRes = await fetchAPI("/articles", {fields: ["slug"]})

    return {
        paths: articlesRes.data.map((article: IPost) => ({
            params: {
                slug: article.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const articlesRes = await fetchAPI("/articles", {
        filters: {
            slug: params.slug,
        },
        populate: "*",
    })
    const categoriesRes = await fetchAPI("/categories")

    return {
        props: {article: articlesRes.data[0], categories: categoriesRes},
        revalidate: 1,
    }
}

export default Post