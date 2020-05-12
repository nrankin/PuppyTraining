import * as ReactNative from 'react-native'
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

export type BaseProps<T> = BaseKnownProps & Omit<T, keyof BaseKnownProps>

export type ViewProps = BaseProps<ReactNative.ViewProps>
export const View = styled.View<ViewProps>(baseSystem)

export type TextProps = BaseProps<ReactNative.TextProps>
export const Text = styled.Text<TextProps>(baseSystem)

export type ImageProps = BaseProps<ReactNative.ImageProps>
export const Image = styled.Image<ImageProps>(baseSystem)

export type ButtonProps = BaseProps<ReactNative.ButtonProps>
export const Button = styled.Button<ButtonProps>(baseSystem)

export type ScrollViewProps = BaseProps<ReactNative.ScrollViewProps>
export const ScrollView = styled.ScrollView<ScrollViewProps>(baseSystem)
