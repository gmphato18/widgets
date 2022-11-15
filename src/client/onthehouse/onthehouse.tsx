import React, { FC } from 'react'
import { TableBase } from '../../components/tableBase/tableBase'
import Render from '../../render'

import './onthehouse.css'

interface IProps {
    divElement: HTMLElement
}

const OnTheHouse: FC<IProps> = ({ divElement }) => {
    return <TableBase divElement={divElement} />
}

Render((div: HTMLElement) => <OnTheHouse divElement={div} />, '.fcw-table')

export default OnTheHouse
