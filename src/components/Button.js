import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import {
  position,
  color,
  space,
  size,
  compose,
  flexbox,
  layout,
  borderRadius,
  shadow
} from 'styled-system'

const Button = styled(TouchableOpacity)(
  compose(size, space, color, flexbox, layout, borderRadius, position, shadow)
)
Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}

export default Button
