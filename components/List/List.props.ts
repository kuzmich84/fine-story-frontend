import {ReactNode} from "react"

export interface ListProps<T>  {
    items: T[];
    renderItem: (item: T) => ReactNode;
    className: string
}
