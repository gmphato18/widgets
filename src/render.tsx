import React from 'react'
import ReactDOM from 'react-dom/client'

/*
It renders a React component into a specific element in the DOM.
*/
const Render = (
    rNode: (div: HTMLElement) => React.ReactNode,
    selector: string
) => {
    const divs = document.querySelectorAll(selector) as NodeListOf<HTMLElement>

    divs.forEach((div) => {
        ReactDOM.createRoot(div).render(rNode(div))
    })
}

export default Render
