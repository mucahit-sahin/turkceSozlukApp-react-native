import { Text as t } from 'react-native'
import styled from 'styled-components'
import { color, size, compose, typography, space, layout } from 'styled-system'

const Text = styled(t)(compose(size, color, typography, space, layout))
Text.defaultProps = {
  color: 'black'
}
export default Text
