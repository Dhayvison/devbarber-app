import {ActivityIndicator, View} from 'react-native';
import styled from 'styled-components/native';

import {Palette} from '../../utils';

export const Wrapper = styled(View)`
  background-color: ${Palette.cyan};
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export const Loading = styled(ActivityIndicator)`
  margin-top: 50px;
`;
