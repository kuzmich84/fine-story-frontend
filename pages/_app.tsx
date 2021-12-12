import '../styles/globals.scss'
import type {AppContext, AppProps} from 'next/app'
import Head from "next/head"
import React, {createContext} from "react"
import axios from "axios"
import App from "next/app"
import {fetchAPI} from "../lib/api"

export const GlobalContext = createContext({})

function MyApp({Component, pageProps}: AppProps) {
    const {global} = pageProps
    return <>
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <meta name="format-detection" content="telephone=no"/>
            <link rel="preload" href="/fonts/montserrat-v14-cyrillic-regular.woff2" as="font"
                  crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/montserrat-v14-cyrillic-500.woff2" as="font"
                  crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/montserrat-v14-cyrillic-900.woff2" as="font"
                  crossOrigin="anonymous"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <GlobalContext.Provider value={global}>
            <Component {...pageProps} />
        </GlobalContext.Provider>
    </>
}

MyApp.getInitialProps = async (ctx: AppContext) => {
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(ctx)
    // Fetch global site settings from Strapi
    const globalRes = await fetchAPI("/global", {
        populate: {
            favicon: "*",
            defaultSeo: {
                populate: "*",
            },
        },
    })
    // Pass the data to our page via props
    return { ...appProps, pageProps: { global: globalRes.data } }
}

export default MyApp


