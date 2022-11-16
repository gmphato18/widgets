import React, {FC} from "react";

interface IProps {
    space: number
    direction: 'top'| 'left'
}

const Spacer: FC<IProps> = ({ space, direction}): JSX.Element => {
    const style = direction === 'top' ? {
        marginTop: space
    } : {
        marginLeft: space
    }
    return <div style={style}></div>
}

export default Spacer;