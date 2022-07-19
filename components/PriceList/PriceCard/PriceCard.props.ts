export interface PriceCardProps {
    image: {
        url: string,
        width?: number,
        height?: number
    },
    title: string,
    price: number,
    content: string,
    iconWidth:string,
    iconHeight:string
}
