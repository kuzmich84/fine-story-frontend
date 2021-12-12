import Head from "next/head"
import {useContext} from "react"
import {GlobalContext} from "../pages/_app"
import {getStrapiMedia} from "../lib/media"

export interface IseoProps {
    seo : {
        id: number
        metaDescription?: string,
        keywords?: string,
        metaTitle?: string,
        preventIndexing?: boolean
    }
}



const Seo = ({seo}: IseoProps) => {

    const {defaultSeo , siteName}: any = useContext(GlobalContext)
    const seoWithDefaults = {
        ...defaultSeo,
        ...seo,
    }
    const fullSeo = {
        ...seoWithDefaults,
        // Add title suffix
        metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
        // Get full image URL
        // shareImage: getStrapiMedia(seoWithDefaults.shareImage),
    }

    return (
        <Head>
            {fullSeo.metaTitle && (

                <title>{fullSeo.metaTitle}</title>

            )}
            {fullSeo.metaDescription && (

                    <meta name="description" content={fullSeo.metaDescription}/>
            )}
            {fullSeo.keywords && (
                <>
                    <meta name="keywords" content={fullSeo.keywords}/>
                </>
            )}
        </Head>
    )
}

export default Seo
