import * as ReactNative from 'react-native'
import {
  background,
  BackgroundProps,
  color,
  ColorProps,
  compose,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'
import styled from 'styled-components/native'

export interface BaseKnownProps
  extends BackgroundProps,
    ColorProps,
    SpaceProps,
    TypographyProps {}

export const baseSystem = compose(background, color, space, typography)

export type BaseProps<T = ReactNative.ViewProps> = BaseKnownProps &
  Omit<T, keyof BaseKnownProps>

export type ViewProps = BaseProps<ReactNative.ViewProps>
export const View = styled.View<ViewProps>(baseSystem)

export type TextProps = BaseProps<ReactNative.TextProps>
export const Text = styled.Text<TextProps>(baseSystem)
