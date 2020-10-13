import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {
  color,
  space,
  size,
  compose,
  flexbox,
  layout,
  borderRadius,
} from 'styled-system';

const Button = styled(TouchableOpacity)(
  compose(size, space, color, flexbox, layout, borderRadius),
);
Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Button;
