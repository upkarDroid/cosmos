import * as React from 'react'
import { Pager } from '@auth0/cosmos'

const mockFn = jest.fn()

class Fixture extends React.Component {
  static onPageChanged = mockFn

  render() {
    return <Pager id="custom-id" page={1} perPage={10} items={25} onPageChanged={mockFn} />
  }
}


export default Fixture
