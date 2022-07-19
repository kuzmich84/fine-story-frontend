export interface Attributes2 {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats?: any;
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

export interface Icon {
    data: Datum2[];
}

export interface Attributes {
    packet: string;
    price: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    icon: Icon;
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

export interface IPriceProps {
    prices: Datum[];
}