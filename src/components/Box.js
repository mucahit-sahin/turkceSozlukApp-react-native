import { View } from 'react-native'
import styled from 'styled-components'
import {
  color,
  size,
  compose,
  flexbox,
  borderRadius,
  layout,
  border,
  space
} from 'styled-system'

const Box = styled(View)(
  compose(size, color, flexbox, border, borderRadius, layout, space)
)
export default Box
