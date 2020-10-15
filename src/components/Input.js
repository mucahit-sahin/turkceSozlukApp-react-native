import { TextInput } from 'react-native'
import styled from 'styled-components'
import {
  color,
  size,
  compose,
  typography,
  space,
  layout,
  borderRadius,
  shadow
} from 'styled-system'
import theme from '../utils/theme'

const Input = styled(TextInput).attrs((props) => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor] || '#999'
}))(compose(size, color, typography, space, layout, borderRadius, shadow))

export default Input
