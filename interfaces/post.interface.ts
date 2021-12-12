export interface Attributes {
    title: string;
    description: string;
    text: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface Data {
    id: number;
    attributes: Attributes;
}

export interface AttributesCategories {
    name: string;
    slug: string;
}

export interface Datum {
    id: number;
    attributes: AttributesCategories ;
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

export interface IPost {
    article: Data;
    categories: Datum[];
}



