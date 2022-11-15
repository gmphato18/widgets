import React, { FC } from 'react'
import Render from '../../render'
import { TableBase } from '../../components/tableBase/tableBase'

import './demoau.css'

interface IProps {
    divElement: HTMLElement
}

const DemoAU: FC<IProps> = ({ divElement }) => {
    return <TableBase divElement={divElement} />
}

Render((div: HTMLElement) => <DemoAU divElement={div} />, '.fcw-table')

export default DemoAU
