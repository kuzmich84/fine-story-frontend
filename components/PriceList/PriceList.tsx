import React from 'react'
import {PriceListProps} from './PriceList.props'
import styles from './PriceList.module.scss'
import PriceCard from "./PriceCard/PriceCard"

const PriceList = ({children, ...props}: PriceListProps): JSX.Element => {
    return (
        <ul className={styles.list} {...props}>
            {children}
        </ul>
    )
}

export default PriceList
