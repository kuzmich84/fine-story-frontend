import Layout from '../components/Layout/Layout'
import Head from 'next/head'
import styles from '../styles/pages-styles/Contacts.module.scss'
import cn from 'classnames'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useState} from 'react'
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

export interface IFormInput {
    name: string;
    phone: string;
    message: string;
}

const Contacts = (): JSX.Element => {

    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm<IFormInput>({
        mode: 'onChange',
    })

    const [success, setSuccess] = useState<string>('')

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        let config = {
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        }

        try {
            // @ts-ignore
            const response = await axios(config)
            if (response.status === 200) {
                reset()
                setSuccess('Ваше ссобщение отправлено. В ближайшее время мы с вами свяжемся. Спасибо.')
                setTimeout(() => {
                    setSuccess('')
                }, 5000)
            }

        } catch (e) {
            console.log(e)
        }


    }
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
                                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                                    <label><input
                                        className={cn(styles.input_name, {
                                            [styles.errorInput]: errors.name,
                                        })}
                                        type="text"
                                        placeholder="ваше имя"
                                        {...register('name', {
                                            required: true,
                                            minLength: 3,
                                        })}
                                    />
                                        {errors.name &&
                                        <p className={styles.error}>Введите ваше имя не меннее 3х символов</p>}
                                    </label>
                                    <label><input
                                        className={cn(styles.input_phone, {
                                            [styles.errorInput]: errors.phone,
                                        })}
                                        placeholder="ваш телефон"
                                        {...register('phone', {
                                            required: true,
                                            pattern: /^([+]?[0-9\s-\(\)]{3,25})*$/i,
                                        })}
                                    />
                                        {errors.phone &&
                                        <p className={styles.error}>Введите ваш телефонный номер</p>}
                                    </label>
                                    <label className={cn(styles.textarea)}>
                                        <textarea
                                            className={cn(styles.input_textarea, {
                                                [styles.errorInput]: errors.message,
                                            })}
                                            placeholder="ваше сообщение"
                                            {...register('message', {
                                                required: true,
                                                minLength: 5,
                                            })}
                                        />
                                        {errors.message &&
                                        <p className={styles.error}>Введите ваше сообщение не менее 5 символов</p>}
                                    </label>
                                    <button className={cn('btn', styles.btn)} type="submit"
                                            disabled={!isValid}>Отправить
                                    </button>
                                    {success && <p className={styles.success}>{success}</p>}
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