import {VideosProps} from "../../interfaces/portfolio.interface"
import Portfolio from "../portfolio"
import {fetchAPI} from "../../lib/api"
import {GetStaticPropsContext} from "next"
import {DatumCategories} from "../../interfaces/video-categories.interface"


const Category = ({videos, videoCategories}: VideosProps): JSX.Element => {

    return (
        <Portfolio videos={videos} videoCategories={videoCategories}/>
    )
}

export async function getStaticPaths() {
    const videoCategoriesRes = await fetchAPI("/video-categories", {fields: ["slug"]})

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

    const videoRes = await fetchAPI("/videos", {
        filters: {
            video_categories: {
                slug: params.slug
            },
        },
        populate: "*",
    })


    const categoriesRes = await fetchAPI("/video-categories")

    const videoCategories = await categoriesRes.data

    return {
        props: {
            videoCategories: videoCategories,
            videos: videoRes.data
        }
    }

}

export default Category

