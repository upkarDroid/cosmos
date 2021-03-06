import * as React from 'react'
import styled from '../../styled'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '../../_helpers/story-helpers'
import { Dialog, Form, Link, Tabs, Paragraph, Text, Button, TextInput } from '../../'

const StyledExample = styled(Example)`
  min-height: 800px;
`

storiesOf('Dialog', module).add('default', () => (
  <StyledExample title="default">
    <Dialog
      open
      title="Example Dialog"
      role="destructive"
      onClose={() => { }}
      actions={[
        new Dialog.Action('OK', () => { }, 'primary'),
        new Dialog.Action('Cancel', () => { }, 'secondary')
      ]}
    >
      Are you sure?
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog', module).add('with primary button only', () => (
  <StyledExample title="with primary button only">
    <Dialog
      open
      title="Example Dialog"
      onClose={() => { }}
      actions={[
        <Button onClick={() => { }} appearance="primary">
          OK
        </Button>
      ]}
    >
      Are you sure?
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog', module).add('without footer', () => (
  <StyledExample title="without footer">
    <Dialog open title="Example Dialog" onClose={() => { }}>
      Some information
    </Dialog>
    <Button>test</Button>
  </StyledExample>
))

storiesOf('Dialog', module).add('with form', () => (
  <StyledExample title="with form">
    <Dialog
      open
      title="Example Dialog"
      role="form"
      onClose={() => { }}
      actions={[
        <Button onClick={() => { }} appearance="primary">
          OK
        </Button>,
        <Button onClick={() => { }} appearance="secondary">
          Cancel
        </Button>
      ]}
      width={600}
    >
      <Form layout="label-on-top">
        <Form.Field label="First Name">
          <TextInput type="text" placeholder="John" />
        </Form.Field>
        <Form.Field label="Last Name">
          <TextInput type="text" placeholder="Doe" />
        </Form.Field>
        <Form.Field label="Email Address">
          <TextInput type="text" placeholder="john.doe@auth0.com" />
        </Form.Field>
      </Form>
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog', module).add('with introduction + form', () => (
  <StyledExample title="with introduction + form">
    <Dialog
      open
      title="Example Dialog"
      onClose={() => { }}
      actions={[
        <Button onClick={() => { }} appearance="primary">
          OK
        </Button>,
        <Button onClick={() => { }} appearance="secondary">
          Cancel
        </Button>
      ]}
      width={600}
    >
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Form layout="label-on-top">
        <Form.Field label="First Name">
          <TextInput type="text" placeholder="John" />
        </Form.Field>
        <Form.Field label="Last Name">
          <TextInput type="text" placeholder="Doe" />
        </Form.Field>
        <Form.Field label="Email Address">
          <TextInput type="text" placeholder="john.doe@auth0.com" />
        </Form.Field>
      </Form>
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog', module).add('stressed', () => (
  <StyledExample title="stressed">
    <Dialog
      open
      title="Thisisaverylongstringoftexttotestworkbreakandoverlowingofthecomponentwhenithasaverylongstringoftest"
      onClose={() => { }}
      actions={[
        <Button onClick={() => { }} appearance="primary">
          OK
        </Button>,
        <Button onClick={() => { }} appearance="secondary">
          Cancel
        </Button>
      ]}
    >
      Thisisaverylongstringoftexttotestworkbreakandoverlowingofthecomponentwhenithasaverylongstringoftest
      This is a brief introduction to the form. This is a short text that goes before the form
      starts and may include <Link href="#">links to other sites</Link> and/or{' '}
      <Text type="strong">bold</Text> text.
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog', module).add('dialog with tabs', () => (
  <StyledExample title="dialog with tabs">
    <Dialog
      open
      title="Example Dialog"
      role="destructive"
      onClose={() => { }}
      actions={[
        new Dialog.Action('OK', () => { }, 'primary'),
        new Dialog.Action('Cancel', () => { }, 'secondary')
      ]}
    >
      <Tabs selected={0} onSelect={_ => { }}>
        <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
        <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
        <Tabs.Tab label="Tab 3">Look, third tab is selected by default!</Tabs.Tab>
      </Tabs>
    </Dialog>
  </StyledExample>
))
