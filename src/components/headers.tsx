import React, { ReactElement } from 'react'
import { Button, Text, View } from './base'
// import theme from './../theme'

export interface HeaderProps {
  text: string
}
export function LargeHeader(props: HeaderProps): React.ReactElement {
  const { text } = props
  return (
    <View flexDirection="row" backgroundColor="primary">
      <Button transparent>
        <Text color="white">Burger</Text>
      </Button>
      <Text textAlign="center" padding={2} fontSize={6}>
        {text}
      </Text>
    </View>
  )
}

export function SmallHeader(props: HeaderProps): React.ReactElement {
  const { text } = props
  return (
    <Text textAlign="center" padding={1} fontSize={2}>
      {text}
    </Text>
  )
}
