import React, { FC } from 'react'

import { creditCards } from '../../data/creditCards'
// import { PersonalLoans } from '../../data/personalLoans'
import DesktopItem from './desktopItem/desktopItem'

import './tablebase.css'
import useIsMobile from '../../hooks/useIsMobile'
import MobileItem from './mobileItem/mobileItem'
import MoreDetails from './moreDetails/moreDetails'
import Disclaimer from './disclaimer/disclaimer'

interface IProps {
    divElement: HTMLElement
}

export const TableBase: FC<IProps> = ({ divElement }): JSX.Element => {
    //TODO: #1 Extract attributes from root element
    //TODO: #2 Use attributes to get data
    //TODO: #3 Use data to render table
    // const elCode = divElement.getAttribute('fcw-code')
    // const elType = divElement.getAttribute('fcw-type')

    const isMobile = useIsMobile()

    return (
        <>
            <h1 className="fcw-table-base__title">
                {creditCards.displayMessage}
            </h1>
            <div className="fcw-table-base__table-mobile">
                {!isMobile && (
                    <table className="fcw-table-base__table">
                        <tbody>
                            {creditCards.items?.map((item, index) => (
                                <DesktopItem item={item} key={index} />
                            ))}
                        </tbody>
                    </table>
                )}

                {isMobile && (
                    <div className="fcw-table-base__mobile-columns">
                        {creditCards.items?.map((item, index) => (
                            <MobileItem item={item} key={index} />
                        ))}
                    </div>
                )}
            </div>
            <MoreDetails />
            <Disclaimer />
        </>
    )
}
