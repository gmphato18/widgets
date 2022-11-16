import React, { FC } from 'react'
import useDelayedState from '../../../../hooks/useDelayedState'
import { IColumn } from '../../../../types/tableBase'
import Tooltip from '../../toolTip/tooltip'

import './itemRow.css'

interface IProps {
    column: IColumn
}

const ItemRow: FC<IProps> = ({ column }): JSX.Element => {
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
        <div className="fcwItemRow">
            <div className="fcwItemRow-Label">
                {column.primaryMessage}
            </div>
            <div>
                <span
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseOut}
                    style={{ borderBottom: hasTooltip ? "1px dotted black" : "" }}
                >
                    {column.label}{' '}
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
        </div>
    )
}

export default ItemRow
