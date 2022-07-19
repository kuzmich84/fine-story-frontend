import React from 'react'
import {ModalProps} from './Modal.props'
import styles from './Modal.module.scss'
import cn from "classnames"
import IconClose from "../Icons/Icon-close"

const Modal = ({active, setActive, children, ...props}: ModalProps): JSX.Element => {
    return (
        <div className={cn(styles.modal, {
            [styles.active]: active
        })} onClick={() => setActive(false)}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
            <div className={styles.icon}>
                <IconClose fill="#33cc99" width={50} height={50}/>
            </div>
        </div>

    )
}

export default Modal
