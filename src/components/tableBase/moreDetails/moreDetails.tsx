import React, { FC } from 'react'
import Link from '../../link/link'
import Spacer from '../../spacer/spacer'

import './moreDetails.css'

interface IProps {
    moreDetails?: string
}

const MoreDetails: FC<IProps> = ({ moreDetails }) => {
    return (
        <div className="fcwMoreDetails">
            <span className="fcwMoreDetails-Text">
                Find the best credit cards for you, compare x,xxx loans from xx{' '}
                lenders.
            </span>
            <Spacer direction='left' space={25} />
            <Link href={'/'}>Compare more credit cards</Link>
        </div>
    )
}

export default MoreDetails
