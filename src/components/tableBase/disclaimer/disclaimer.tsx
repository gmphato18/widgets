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
        <div className="fcw-table-base__disclaimer">
            <button
                className="fcw-table-base__disclaimer__button"
                onClick={(e) => handleOnClick()}
            >
                * Important information
                <div
                    className="fcw-table-base__disclaimer__button-icon"
                    style={{
                        transition: 'all 0.5s ease',
                        transform: close ? 'rotate(45deg)' : 'rotate(138deg)',
                    }}
                    ref={arrowRef as LegacyRef<HTMLDivElement>}
                ></div>
            </button>
            <div
                className="fcw-table-base__disclaimer__text-wrapper"
                style={{
                    maxHeight: close ? '0px' : '500px',
                    transition: 'all 0.5s ease',
                }}
            >
                <div className="fcw-table-base__disclaimer__text-wrapper__text">
                    {disclaimer}
                </div>
            </div>
        </div>
    )
}

export default Disclaimer
