import React, { FC } from 'react'
import Link from '../../link/link'
import Spacer from '../../spacer/spacer'

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
            <Spacer direction='left' space={20} />
            <Link href={'/'} style={{marginTop: 20}}>Compare more credit cards</Link>
        </div>
    )
}

export default MoreDetails
