import {Attributes} from "../../interfaces/about.interface"

export interface PostCardProps {
    image: Attributes,
    title: string,
    excerpt: string,
    slug: string,
    date: string,
    views: number
}
