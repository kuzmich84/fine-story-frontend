import {Datum as DatumCategories} from "./post.interface"

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

export interface Medium {
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

export interface Formats {
    thumbnail: Thumbnail;
    large: Large;
    medium: Medium;
    small: Small;
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

export interface Datum2 {
    id: number;
    attributes: Attributes2;
}

export interface Image {
    data: Datum2[];
}

export interface Attributes3 {
    Name: string;
    Description?: any;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface Data {
    id: number;
    attributes: Attributes3;
}

export interface Category {
    data: Data;
}

export interface Seo {
    id: number;
    metaTitle?: any;
    metaDescription: string;
    keywords: string;
    preventIndexing: boolean;
}

export interface Attributes {
    title: string;
    text: string;
    date: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    views?: any;
    slug: string;
    excerpt: string;
    image: Image;
    category: Category;
    seo: Seo[];
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

export interface IPosts {
    articles: Datum[];
    meta: Meta;
    categories: DatumCategories[];
    countPages: number;
    page: number
}



