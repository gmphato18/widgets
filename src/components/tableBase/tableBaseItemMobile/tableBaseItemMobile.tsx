import React, { FC } from 'react'
import { IItem } from '../../../types/tableBase'

import './tableBaseItemMobile.css'
import TableBaseItemMobileRow from './TableBaseItemMobileRow/TableBaseItemMobileRow'

interface IProps {
    item: IItem
}

const TableBaseItemMobile: FC<IProps> = ({ item }) => {
    const hasMoreThanFourColumns = item.columns.length > 4
    return (
        <div className="fcw-table-base__item-mobile">
            <div className="fcw-table-base__item-mobile__header">
                <img
                    src={item.imageSrc}
                    alt={item.varianceTitle as string}
                    className="fcw-table-base__table-item-left__icon"
                />
                <div className="fcw-table-base__item-mobile__header__text">
                    {item.summary}
                </div>
            </div>
            <div className="fcw-table-base__item-mobile__body">
                {item.columns?.map((column, index) => (
                    <TableBaseItemMobileRow column={column} key={index} />
                ))}
            </div>
            <div className="fcw-table-base__item-mobile__footer">
                <a
                    className="fcw-table-base__table-item-right__button"
                    href={item.url.naturalLinkUrl}
                >
                    <div>More details</div>
                </a>
            </div>
        </div>
    )
}

export default TableBaseItemMobile
