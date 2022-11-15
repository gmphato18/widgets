import React, { FC } from 'react'

interface IProps {
    content?: string
}

const tableBaseAccordion: FC<IProps> = ({ content }) => {
    return <div>tableBaseAccordion</div>
}

const TableBaseAccordion = React.memo(tableBaseAccordion)

export default TableBaseAccordion
