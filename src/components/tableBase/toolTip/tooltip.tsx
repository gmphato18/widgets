import React, { FC } from 'react'

import './tooltip.css'

interface IProps {
    message?: string
}

const Tooltip: FC<IProps> = ({ message }) => {
    return (
        <div className="fcw-table-base__tooltip">
            <div className="fcw-table-base__tooltip__text">{message}</div>
        </div>
    )
}

export default Tooltip
