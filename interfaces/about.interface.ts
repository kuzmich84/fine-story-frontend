export interface Formats {
    xsmall: {
        url: string
    };

}

export interface Attributes {
    url: string,
    alternativeText: string,
    width?: number,
    height?: number,

    formats: Formats
}


export interface Data {
    id: number;
    attributes: Attributes;
}


export interface IAboutInterface {
    data: {
        title: string,
        description: string,
        seo?: any
    },
    image: Attributes


}

