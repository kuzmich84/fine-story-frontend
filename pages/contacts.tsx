import Layout from "../components/Layout/Layout"
import Head from "next/head"
import styles from "../styles/pages-styles/Contacts.module.scss"
import cn from "classnames"

const Contacts = (): JSX.Element => {
    return (
        <Layout>
            <Head>
                <title>Контакты</title>
            </Head>
            <section className={styles.contacts}>
                <div className="container">
                    <div className={styles.wrapper}>
                        <h2><span>Контакты</span></h2>
                        <div className={styles.content}>
                            <div className={styles.address}>
                                <h3>Друзья!</h3>
                                <p>Мы будем рады пообщаться с Вами в неформальной обстановке, рассказать о всех нюансах
                                    видеосъемки и обсудить сценарий торжества.</p>
                                <p>Вы сможете задать все интересующие Вас вопросы.</p>
                                <a href="tel:+79215777600"><p>Телефон: <span>+7-921-5-777-600</span></p></a>
                                <a href="mailto:mail@fine-story.ru"><p>Email: <span>mail@fine-story.ru</span></p></a>
                            </div>
                            <div className={styles.feedback}>
                                <h2>Напишите нам</h2>
                                <form action="#" method="post">
                                    <label><input className={styles.input_name} type="text" placeholder="ваше имя"
                                                  name="name"/></label>
                                    <label><input className={styles.input_phone} type="tel" placeholder="ваш телефон"
                                                  name="phone"/></label>
                                    <label><textarea className={styles.input_textarea} placeholder="ваше сообщение"
                                                     name="message"/></label>
                                    <button className={cn("btn", styles.btn)} type="submit">Отправить</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Contacts