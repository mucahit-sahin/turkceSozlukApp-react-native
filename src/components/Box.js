import {View} from 'react-native';
import styled from 'styled-components';
import {color, size, compose, flexbox} from 'styled-system';

const Box = styled(View)(compose(size, color, flexbox));
export default Box;
