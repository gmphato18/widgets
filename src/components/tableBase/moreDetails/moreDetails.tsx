import React, { FC } from 'react'

import './moreDetails.css'

interface IProps {
    moreDetails?: string
}

const MoreDetails: FC<IProps> = ({ moreDetails }) => {
    return (
        <div className="fcw-table-base__more-info">
            <span className="fcw-table-base__more-info__text">
                Find the best credit cards for you, compare x,xxx loans from xx{' '}
                lenders.
            </span>
            <span className="fcw-table-base__spacer-small"></span>
            <button className="fcw-table-base__more-info__button">
                Compare more credit cards
            </button>
        </div>
    )
}

export default MoreDetails
