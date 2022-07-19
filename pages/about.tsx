import Layout from "../components/Layout/Layout"
import Link from "next/link"
import styles from "../styles/pages-styles/About.module.scss"
import Head from "next/head"
import axios from "axios"
import {IAboutInterface} from "../interfaces/about.interface"
import ReactMarkdown from "react-markdown"
import {getStrapiMedia} from "../lib/media"
import Image from "next/image"
import Seo from "../components/seo"

const About = ({data, image}: IAboutInterface): JSX.Element => {
    const {title, description, seo} = data

    return (
        <Layout>
            <Seo seo={seo}/>
            <section className={styles.about}>
                <div className="container">
                    <div className={styles.content}>
                        <h2><span>О нас</span></h2>
                        <div className={styles.container}>
                            <div className={styles.photo}>
                                <Image
                                    layout="fill"
                                    src={getStrapiMedia(image)}
                                    placeholder="blur"
                                    blurDataURL={getStrapiMedia(image.formats.xsmall)}
                                    className={styles.image}
                                    alt={image.alternativeText}
                                />
                            </div>
                            <div className={styles.text}>
                                <h3>{title}</h3>
                                <ReactMarkdown>
                                    {description}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>

    )
}

export default About

export async function getStaticProps() {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/about`, {
            params: {
                populate: "*"
            }
        })
        const data = await res.data.data.attributes
        const image = data.image.data.attributes


        return {
            props: {
                data,
                image,
            },
        }
    } catch {
        return {
            notFound: true
        }
    }

}