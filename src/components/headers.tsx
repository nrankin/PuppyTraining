import React, { useCallback } from 'react'
import { Body, Button, Header, Icon, Left, Right, Text, View } from './base'
import MenuButton from '../components/MenuButton'
export interface HeaderProps {
  title: string
  navigation: any
}
export function LargeHeader(props: HeaderProps): React.ReactElement {
  const { title, navigation } = props
  return (
    <Header backgroundColor="primary">
      <Left flex={0.2} paddingY={2}>
        <MenuButton navigation={navigation} />
      </Left>
      <Body flex={1}>
        <Text justifyContent="center" paddingY={2} fontSize={3}>
          {title}
        </Text>
      </Body>
      <Right flex={0.2}></Right>
    </Header>
  )
}

export function SmallHeader(props: HeaderProps): React.ReactElement {
  const { title } = props
  return (
    <Text textAlign="center" padding={1} fontSize={2}>
      {title}
    </Text>
  )
}
