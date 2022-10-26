import * as appTypes from './types'

export interface ISiteRequestAppProperties {
  baseRouteUrl: string
  apiUrls: appTypes.apiUrls
}

export interface RouteProperties {
  siteRequestAppProperties: ISiteRequestAppProperties
  routeParameters: appTypes.routeParameters
}

export interface ICounterRouteProperties extends RouteProperties {
  value?: number
}
