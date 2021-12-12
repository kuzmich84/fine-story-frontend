export interface Seo {
    id: number;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    preventIndexing: boolean;
}

export interface Attributes {
    Title: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    seo: Seo;
}

export interface Data {
    id: number;
    attributes: Attributes;
}

export interface RootObject {
    homepage: Data;
}