import {TouchableHighlight, TouchableOpacity, View, Text} from 'react-native';
import styled from 'styled-components/native';

import {Palette} from '../../utils';

export const Wrapper = styled(View)`
  background-color: ${Palette.blue};
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px;
`;

export const InputArea = styled(View)`
  width: 100%;
`;

export const SignInButton = styled(TouchableHighlight)`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  margin-bottom: 15px;
`;

export const SignUpButton = styled(TouchableOpacity)`
  width: 100%;
  height: 60px;
  flex-direction: row;
  border: 2px solid rgba(256, 256, 256, 0.3);
  border-radius: 30px;
  align-items: center;
  justify-content: space-evenly;
`;

export const ButtonText = styled(Text)`
  color: ${Palette.dark};
`;

export const Strong = styled(ButtonText)`
  font-weight: bold;
  color: white;
  text-transform: uppercase;
`;

export const ErrorMessage = styled(Text)`
  background-color: tomato;
  font-weight: bold;
  border-radius: 30px;
  text-align: center;
  margin-bottom: 15px;
  padding: 5px;
  color: ${Palette.dark};
`;
