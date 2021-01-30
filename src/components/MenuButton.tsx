import React, { useCallback } from 'react'
import { Button, Icon, View } from './base'

export interface MenuButtonProps {
  navigation: any
}
export default function MenuButton(props: MenuButtonProps): React.ReactElement {
  const { navigation } = props

  const onMenuPress = useCallback(() => {
    navigation.openDrawer()
  }, [navigation])

  return (
    <>
      <View flex={1} justifyContent="flex-start">
        <Button transparent onPress={onMenuPress}>
          <Icon
            name="menu"
            color="black"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ fontSize: 30, marginRight: 2, marginTop: 2 }}
          />
        </Button>
      </View>
    </>
  )
}
