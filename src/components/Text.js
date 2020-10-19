import { Text as t } from 'react-native'
import styled from 'styled-components'
import {
  color,
  size,
  compose,
  typography,
  space,
  layout,
  fontWeight
} from 'styled-system'

const Text = styled(t)(
  compose(size, color, typography, space, layout, fontWeight)
)
Text.defaultProps = {
  color: 'black'
}
export default Text
