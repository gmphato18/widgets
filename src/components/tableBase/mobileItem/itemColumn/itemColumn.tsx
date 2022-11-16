import React, { FC } from 'react'
import { IColumn } from '../../../../types/tableBase'
import Tooltip from '../../toolTip/tooltip'

import './itemColumn.css'
import useDelayedState from '../../../../hooks/useDelayedState'

interface IProps {
    column: IColumn
}

const ItemColumn: FC<IProps> = ({ column }) => {
    const hasTooltip = column.additionalInfo || column.description
    const [isTooltipVisible, setIsTooltipVisible] = useDelayedState(false)

    const delayMS = 500
    const handleMouseEnter = (): void => {
        if (hasTooltip) setIsTooltipVisible(true, delayMS)
    }

    const handleMouseOut = (): void => {
        if (hasTooltip) setIsTooltipVisible(false, delayMS)
    }
    return (
        <div className="fcw-table-base__item-mobile__column">
            <div className="fcw-table-base__item-mobile__column__title"
            >
                <span
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseOut}
                    style={{
                        borderBottom: hasTooltip ? "1px dotted black" : ""
                    }}
                >
                    {column.label}
                </span>
            </div>
            {isTooltipVisible && (
                <Tooltip
                    message={
                        !column.primaryMessage
                            ? column.secondaryMessage
                            : column.primaryMessage
                    }
                />
            )}
            <div className="fcw-table-base__item-mobile__column__value">
                <div
                    dangerouslySetInnerHTML={{ __html: column.primaryMessage }}
                />
            </div>
        </div>
    )
}

export default ItemColumn
