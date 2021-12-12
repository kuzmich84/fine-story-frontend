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
    },
    image: Attributes

}


{
    alternativeText: "videosemka-svadby.jpg"
    caption: "videosemka-svadby.jpg"
    createdAt: "2021-12-09T13:01:01.223Z"
    ext: ".jpg"
    hash: "videosemka_svadby_5c5a2ad4bb"
    height: 640
    mime: "image/jpeg"
    name: "videosemka-svadby.jpg"
    previewUrl: null
    provider: "local"
    provider_metadata: null
    size: 91.58
    updatedAt: "2021-12-09T13:01:01.223Z"
    url: "/uploads/videosemka_svadby_5c5a2ad4bb.jpg"
    width: 1024
}