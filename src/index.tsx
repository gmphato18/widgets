import React from 'react'
import ReactDOM from 'react-dom/client'
// import DemoAU from './client/demoau/demoau'
import OnTheHouse from './client/onthehouse/onthehouse'

const rootElement = document.getElementsByClassName(
    'fcw-table'
)[0] as HTMLElement

ReactDOM.createRoot(rootElement).render(<OnTheHouse divElement={rootElement} />)
