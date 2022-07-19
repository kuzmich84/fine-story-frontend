import React from 'react'
import {ListProps} from './List.props'
import styles from './List.module.scss'

export default function List<T>(props: ListProps<T>) {

    return (
        <ul className={props.className}>
            {props.items.map(props.renderItem)}
        </ul>
    )
}
