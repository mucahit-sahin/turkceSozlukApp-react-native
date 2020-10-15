import { View } from 'react-native'
import styled from 'styled-components'
import {
  color,
  size,
  compose,
  flexbox,
  borderRadius,
  layout,
  space
} from 'styled-system'

const Box = styled(View)(
  compose(size, color, flexbox, borderRadius, layout, space)
)
export default Box
