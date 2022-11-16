import React, { AnchorHTMLAttributes, FC } from 'react'

import './link.css'

// TODO: Probably doesn't need extending, define href prop and pass down
interface IProps extends React.DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>,HTMLAnchorElement>
{
    outline?: boolean
 }

const Link: FC<IProps> = ({ children, outline = false, ...props }): JSX.Element => {
    return <a className={ `fcwLink ${outline ? "fcwLink-Primary_outline": "fcwLink-Primary"}`}{...props}>
        {children}
    </a>
}

export default Link