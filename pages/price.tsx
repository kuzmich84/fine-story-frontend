import Head from "next/head"
import Layout from "../components/Layout/Layout"
import styles from "../styles/pages-styles/Price.module.scss"
import {fetchAPI} from "../lib/api"
import PriceList from "../components/PriceList/PriceList"
import {IPriceProps} from "../interfaces/price.interface"
import PriceCard from "../components/PriceList/PriceCard/PriceCard"

const Price = ({prices}: IPriceProps): JSX.Element => {
    return (
        <Layout>
            <Head>
                <title>Услуги и Цены</title>
            </Head>
            <section className={styles.price}>
                <div className="container">
                    <div className={styles.content}>
                        <h2><span>Наши услуги и цены</span></h2>
                        <PriceList>
                            {prices.map((price) => <PriceCard
                                key={price.id}
                                image={price.attributes.icon.data[0].attributes}
                                iconWidth='34px'
                                iconHeight='34px'
                                title={price.attributes.packet}
                                price={price.attributes.price}
                                content={price.attributes.content}/>)}
                        </PriceList>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const priceRes = await fetchAPI(`/prices`, {
        populate: "*"
    })

    if (!priceRes) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            prices: priceRes.data,
        },
        revalidate: 1,
    }
}

export default Price