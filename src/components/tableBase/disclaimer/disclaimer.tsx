import React, { FC, LegacyRef, useRef } from 'react'

import './disclaimer.css'

interface IProps {
    disclaimer?: string
}

const Disclaimer: FC<IProps> = ({ disclaimer }) => {
    const arrowRef = useRef<HTMLDivElement | undefined>()
    const [close, setClose] = React.useState(true)

    const handleOnClick = () => setClose((prev) => !prev)

    return (
        <div className="fcwDisclaimer">
            <button
                className="fcwDisclaimer-Button"
                onClick={(e) => handleOnClick()}
            >
                * Important information
                <div
                    style={{
                        transition: 'all 0.5s ease',
                        transform: close ? 'rotate(45deg)' : 'rotate(138deg)',
                    }}
                    ref={arrowRef as LegacyRef<HTMLDivElement>}
                ></div>
            </button>
            <div
                className="fcwDisclaimer-Text"
                style={{
                    maxHeight: close ? '0px' : '500px',
                    transition: 'all 0.5s ease',
                }}
            >
                <div className="fcwDisclaimer-Text">
                    {disclaimer}
                </div>
            </div>
        </div>
    )
}

export default Disclaimer
