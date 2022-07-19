
export interface Attributes {
    name: string;
    description?: any;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    slug: string;
}

export interface Datum {
    id: number;
    attributes: Attributes;
}

export interface CategoryListProps {
    data: Datum[];
}


