import {getStrapiURL} from "./api"

export function getStrapiMedia(media: any) {
    const { url } = media
    return url.startsWith("/") ? getStrapiURL(url) : url
}