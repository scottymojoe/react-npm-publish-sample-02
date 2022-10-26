import * as React from 'react'
import { render } from '@testing-library/react'
import * as appInterfaces from '../../src/shapes/interfaces'

import 'jest-canvas-mock'

import CounterSample from '../../src/components/routes/counter-sample'

describe('Common render', () => {
  it('renders without crashing', () => {
    const props: appInterfaces.ICounterRouteProperties = {
      siteRequestAppProperties: {
        baseRouteUrl: '',
        apiUrls: [],
      },
      routeParameters: [],
      value: 0,
    }
    render(<CounterSample {...props} />)
  })
})
