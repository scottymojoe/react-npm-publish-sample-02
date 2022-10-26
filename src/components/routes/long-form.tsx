import React from 'react'
import * as appInterfaces from '../../shapes/interfaces'

const LongForm = (props: appInterfaces.RouteProperties) => {
  return <>{props.siteRequestAppProperties.baseRouteUrl}</>
}

export default LongForm
