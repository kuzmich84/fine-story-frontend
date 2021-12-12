import Head from "next/head"
import Layout from "../components/Layout/Layout"
import styles from "../styles/pages-styles/Price.module.scss"

const Price = (): JSX.Element => {
    return (
        <Layout>
            <Head>
                <title>Услуги и Цены</title>
            </Head>
            <section className={styles.price}>
                <div className="container">
                    <div className={styles.content}>
                        <h2><span>Наши услуги и цены</span></h2>
                        <ul className={styles.list}>
                            <li className={styles.list__item}>
                                <svg width="34" height="34">
                                    <use xlinkHref="img/sprite.svg#icon-price-maximum"></use>
                                </svg>
                                <h3>`Свадебный  максимум`</h3>
                                <h4>25 000 руб.</h4>
                                <p>Видеосъемка в FUll HD в течение 10 часов;</p>
                                <p>Монтаж свадебного клипа(до 5 мин.);</p>
                                <p>Монтаж художественного свадебного фильма (до 30-50 мин.);</p>
                                <p>Запись всех фильмов и клипа на индивидуально оформленный Flash Disc;</p>
                                <p>Собственный автотранспорт.</p>
                                <p>Срок изготовления – до трех месяцев</p>
                            </li>
                            <li className={styles.list__item}>
                                <svg width="34" height="34">
                                    <use xlinkHref="img/sprite.svg#icon-price-standart"></use>
                                </svg>
                                <h3>`Свадебный стандарт`</h3>
                                <h4>20 000 руб.</h4>
                                <p>Видеосъемка в FUll HD в течение 8 часов;</p>
                                <p>Монтаж свадебного клипа(до 5 мин.);</p>
                                <p>Монтаж художественного свадебного фильма (до 40 мин.);</p>
                                <p>Запись всех фильмов и клипа на индивидуально оформленный Flash Disc;</p>
                                <p>Собственный автотранспорт.</p>
                                <p>Срок изготовления – до трех месяцев</p>
                            </li>
                            <li className={styles.list__item}>
                                <svg width="34" height="34">
                                    <use xlinkHref="img/sprite.svg#icon-price-minimum"></use>
                                </svg>
                                <h3>`Свадебный минимум`</h3>
                                <h4>15 000 руб.</h4>
                                <p> Видеосъемка ЗАГС + прогулка (вне зависимости от времени);</p>
                                <p>Монтаж свадебного клипа (до 5 мин.);</p>
                                <p>Монтаж репортажного фильма (до 20 мин.);</p>
                                <p>Запись всех фильмов и клипа на индивидуально оформленный Flash Disc;</p>
                                <p>Собственный автотранспорт.</p>
                                <p>Срок изготовления – до трех месяцев</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Price