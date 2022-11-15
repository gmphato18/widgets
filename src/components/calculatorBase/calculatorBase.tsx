import React, { FC } from 'react'

interface ICalculatorProps {
    domElement?: HTMLElement
}

export const CalculatorBase: FC<ICalculatorProps> = ({
    domElement,
}): JSX.Element => {
    return (
        <>
            <h1 className="fcw-calculator-title">Calculator</h1>
        </>
    )
}
