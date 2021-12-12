import {Attributes} from "../../interfaces/about.interface"

export interface ImageProps {
    image: Attributes
    style?: object
    layout?: "fill" | "fixed" | "intrinsic" | "responsive"
}
