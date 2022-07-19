import {Datum as DatumCategories} from "./video-categories.interface"
export interface Thumbnail {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
}

export interface Large {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
}

export interface Small {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
}

export interface Xsmall {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
}

export interface Formats {
    thumbnail: Thumbnail;
    large: Large;
    small: Small;
    xsmall: Xsmall;
}

export interface Attributes2 {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: any;
    provider: string;
    provider_metadata?: any;
    createdAt: Date;
    updatedAt: Date;
}

export interface Data {
    id: number;
    attributes: Attributes2;
}

export interface Image {
    data: Data;
}

export interface Attributes3 {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    slug?: any;
}

export interface Datum2 {
    id: number;
    attributes: Attributes3;
}

export interface VideoCategories {
    data: Datum2[];
}

export interface Attributes {
    URL: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    title: string;
    date: string;
    image: Image;
    video_categories: VideoCategories;
}

export interface Datum {
    id: number;
    attributes: Attributes;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface Meta {
    pagination: Pagination;
}

export interface VideosProps {
    videos: Datum[];
    videoCategories: DatumCategories[];
    meta?: Meta;
    slug?: string
}


