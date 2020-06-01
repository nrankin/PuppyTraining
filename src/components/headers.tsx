import React from 'react'
import { Text } from './base'

export interface HeaderProps {
  text: string
}
export function LargeHeader(props: HeaderProps): React.ReactElement {
  const { text } = props
  return (
    <Text textAlign="center" padding={2} fontSize={6} backgroundColor="primary">
      {text}
    </Text>
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
