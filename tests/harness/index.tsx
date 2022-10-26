import React from 'react'
import ReactDOM from 'react-dom/client'
import * as appInterfaces from '../../src/shapes/interfaces'
import SiteRequestApp from '../../src/components/app'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const props: appInterfaces.ISiteRequestAppProperties = {
  baseRouteUrl: '/',
  apiUrls: [],
}
root.render(
  <React.StrictMode>
    <SiteRequestApp {...props} />
  </React.StrictMode>,
)
