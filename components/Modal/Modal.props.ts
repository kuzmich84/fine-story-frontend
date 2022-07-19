import {DetailedHTMLProps, HTMLAttributes, ReactChild, ReactNode} from "react"

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    active: boolean;
    setActive: (arg: boolean) => void;
    children: ReactNode | ReactChild;
}
