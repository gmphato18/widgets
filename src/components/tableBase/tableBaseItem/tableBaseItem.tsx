import React, { FC } from 'react'
import { IItem } from '../../../types/tableBase'
import TableBaseItemColumn from './tableBaseItemColumn/tableBaseItemColumn'

import './tableBaseItem.css'

interface IProps {
    item: IItem
}

const TableBaseItem: FC<IProps> = ({ item }) => {
    return (
        <>
            <tr className="fcw-table-base__table-item">
                <td className="fcw-table-base__table-item-left">
                    <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="fcw-table-base__table-item-left__icon"
                    />
                </td>
                <td className="fcw-table-base__table-item-right">
                    <div className="fcw-table-base__table-item-right__text--small">
                        {item.summary}
                    </div>
                    <div className="fcw-table-base__table-item-right__container">
                        {item.columns.map((column, index) => (
                            <TableBaseItemColumn column={column} key={index} />
                        ))}
                        <a
                            className="fcw-table-base__table-item-right__button"
                            href={item.url.naturalLinkUrl}
                        >
                            <div>More details</div>
                        </a>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default TableBaseItem
