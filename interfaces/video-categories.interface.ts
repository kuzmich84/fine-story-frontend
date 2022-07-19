export interface Attributes {
        name: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        slug: string;
    }
    export interface DatumCategories {
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

    export interface VideoCategoriesProps {
        videoCategories: DatumCategories[];
    }


