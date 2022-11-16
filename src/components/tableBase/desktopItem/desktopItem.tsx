import React, { FC } from 'react'
import { IItem } from '../../../types/tableBase'
import ItemRow from './itemRow/itemRow'

import './desktopItem.css'

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
                        <a
                            className="fcwDesktopItem-Link"
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

export default DesktopItem
