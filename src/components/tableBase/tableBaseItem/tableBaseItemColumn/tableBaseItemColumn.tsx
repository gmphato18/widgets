import React, { FC } from 'react'
import useDelayedState from '../../../../hooks/useDelayedState'
import { IColumn } from '../../../../types/tableBase'

import icon from '../../icon.svg'
import Tooltip from '../../toolTip/tooltip'

interface IProps {
    column: IColumn
}

const TableBaseItemColumn: FC<IProps> = ({ column }): JSX.Element => {
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
        <div className="fcw-table-base__table-item-right__container-column">
            <h3 className="fcw-table-base__table-item-right__container-column-text-large">
                {column.primaryMessage}
            </h3>
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
            {isTooltipVisible && (
                <Tooltip
                    message={
                        !column.primaryMessage
                            ? column.secondaryMessage
                            : column.primaryMessage
                    }
                />
            )}
        </div>
    )
}

export default TableBaseItemColumn
