import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '../../_helpers/story-helpers'

import { Form } from '../../'

storiesOf('Form', module).add('layouts', () => (
  <div>
    <Example title="label-on-left">
      <Form>
        <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
        <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
        <Form.TextInput
          label="Field label"
          type="text"
          placeholder="Enter something"
          error="Show only in the first field"
        />
        <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
        <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
        <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
        <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
        <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => { } }} />
      </Form>
    </Example>
    <Example title="label-on-top">
      <Form layout="label-on-top">
        <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
        <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => { } }} />
      </Form>
    </Example>
  </div>
))
