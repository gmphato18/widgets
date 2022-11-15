import React, { FC } from 'react'
import { IColumn } from '../../../../types/tableBase'
import Tooltip from '../../toolTip/tooltip'

import './tableBaseItemMobileRow.css'
import icon from '../../icon.svg'
import useDelayedState from '../../../../hooks/useDelayedState'

interface IProps {
    column: IColumn
}

const TableBaseItemMobileRow: FC<IProps> = ({ column }) => {
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
            <div className="fcw-table-base__item-mobile__column__title">
                {column.label}{' '}
                {hasTooltip && (
                    <span
                        className="fcw-table-base__item-mobile__tooltip-icon"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseOut}
                    >
                        {' '}
                        <img src={icon} alt="React Logo" />
                    </span>
                )}
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

export default TableBaseItemMobileRow
