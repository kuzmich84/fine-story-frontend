export interface Attributes {
    Name: string;
    Description?: any;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface Datum {
    id: number;
    attributes: Attributes;
}

export interface CategoryListProps {
    data: Datum[];
}


