import {View} from 'react-native';
import styled from 'styled-components';
import {
  color,
  size,
  compose,
  flexbox,
  borderRadius,
  layout,
} from 'styled-system';

const Box = styled(View)(compose(size, color, flexbox, borderRadius, layout));
export default Box;
