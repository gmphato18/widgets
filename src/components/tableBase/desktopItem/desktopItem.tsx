import React, { FC } from 'react'
import { IItem } from '../../../types/tableBase'
import ItemRow from './itemRow/itemRow'

import './desktopItem.css'
import Link from '../../link/link'

interface IProps {
    item: IItem
}

const DesktopItem: FC<IProps> = ({ item }) => {
    return (
        <>
            <tr className="fcwDesktopItem">
                <td className="fcwDesktopItem-Image">
                    <img
                        src={item.imageSrc}
                        alt={item.title}
                    />
                </td>
                <td className="fcwDesktopItem-Wrapper">
                    <div> {item.summary} </div>
                    <div className="fcwDesktopItem-Columns">
                        {item.columns.map((column, index) => (
                            <ItemRow column={column} key={index} />
                        ))}
                        <Link href={item.url.naturalLinkUrl} outline>More details</Link>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default DesktopItem
