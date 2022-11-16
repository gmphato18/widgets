import React, { FC } from 'react'
import { IItem } from '../../../types/tableBase'

import './mobileItem.css'
import ItemColumn from './itemColumn/itemColumn'
import Link from '../../link/link'

interface IProps {
    item: IItem
}

const MobileItem: FC<IProps> = ({ item }) => {
    const hasMoreThanFourColumns = item.columns.length > 4
    return (
        <div className="fcwMobileItem">
            <div className="fcwMobileItem-Header">
                <img
                    src={item.imageSrc}
                    alt={item.varianceTitle as string}
                />
                <p> {item.summary} </p>
            </div>
            <div>
                {item.columns?.map((column, index) => (
                    <ItemColumn column={column} key={index} />
                ))}
            </div>
            <div className="fcwMobileItem-Footer">
                <Link href={item.url.naturalLinkUrl} outline>More details</Link>
            </div>
        </div>
    )
}

export default MobileItem
