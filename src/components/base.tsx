// with help from
// - https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/reflexbox/index.d.ts
// - https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/rebass/index.d.ts
// - https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/styled-system/index.d.ts
// - https://github.com/GeekyAnts/NativeBase/blob/master/index.d.ts

// import React from 'react'
import * as ReactNative from 'react-native'
import * as NativeBase from 'native-base'
import {
  background,
  BackgroundProps,
  color,
  ColorProps,
  compose,
  flexbox,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  FlexboxProps,
} from 'styled-system'
import styled from 'styled-components/native'

export interface BaseKnownProps
  extends BackgroundProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps {}

export const baseSystem = compose(background, color, flexbox, space, typography)

export type BaseProps<T = NativeBase.View> = BaseKnownProps &
  Omit<T, keyof BaseKnownProps>

export type ViewProps = BaseProps<NativeBase.NativeBase.View>
export const View = styled(NativeBase.View)<ViewProps>(baseSystem)

export type TextProps = BaseProps<NativeBase.NativeBase.Text>
export const Text = styled(NativeBase.Text)<TextProps>(baseSystem)

export type IconProps = BaseProps<NativeBase.NativeBase.Icon>
export const Icon = styled(NativeBase.Icon)<IconProps>(baseSystem)

export type ImageProps = BaseProps<ReactNative.Image>
export const Image = styled(ReactNative.Image)<ImageProps>(baseSystem)

export type ButtonProps = BaseProps<NativeBase.NativeBase.Button>
export const Button = styled(NativeBase.Button)<ButtonProps>(baseSystem)

export type ScrollViewProps = BaseProps<ReactNative.ScrollViewProps>
export const ScrollView = styled.ScrollView<ScrollViewProps>(baseSystem)

export type TextInputProps = BaseProps<ReactNative.TextInputProps>
export const TextInput = styled.TextInput<TextInputProps>(baseSystem)

export type ContainerProps = BaseProps<NativeBase.NativeBase.Container>
export const Container = styled(NativeBase.Container)<ContainerProps>(
  baseSystem,
)

export type ContentProps = BaseProps<NativeBase.NativeBase.Content>
export const Content = styled(NativeBase.Content)<ContentProps>(baseSystem)

export type HeaderProps = BaseProps<NativeBase.NativeBase.Header>
export const Header = styled(NativeBase.Header)<HeaderProps>(baseSystem)

export type TitleProps = BaseProps<NativeBase.NativeBase.Title>
export const Title = styled(NativeBase.Title)<TitleProps>(baseSystem)

export type LeftProps = BaseProps<NativeBase.NativeBase.Left>
export const Left = styled(NativeBase.Left)<LeftProps>(baseSystem)

export type RightProps = BaseProps<NativeBase.NativeBase.Right>
export const Right = styled(NativeBase.Right)<RightProps>(baseSystem)

export type BodyProps = BaseProps<NativeBase.NativeBase.Body>
export const Body = styled(NativeBase.Body)<BodyProps>(baseSystem)
