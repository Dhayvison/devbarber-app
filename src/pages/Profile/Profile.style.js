import {Image, Text, TouchableHighlight, View} from 'react-native';
import styled from 'styled-components';
import {Palette} from '../../utils';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: ${Palette.blue};
`;

export const UserInfo = styled(View)`
  width: 100%;
  align-items: center;
  padding: 60px 40px;
  border-radius: 30px;
  overflow: hidden;
`;

export const UserAvatar = styled(Image)`
  width: 250px;
  height: 250px;
  border-width: 10px;
  border-color: ${Palette.light};
  border-radius: 125px;
`;

export const UserName = styled(Text)`
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 20px;
`;

export const UserEmail = styled(Text)`
  color: ${Palette.light};
  margin-top: 20px;
`;

export const LogOutButton = styled(TouchableHighlight)`
  width: 100%;
  height: 60px;
  flex-direction: row;
  border: 2px solid rgba(256, 256, 256, 0.3);
  border-radius: 30px;
  align-items: center;
  justify-content: space-evenly;
`;

export const Strong = styled(Text)`
  color: ${Palette.dark};
  font-weight: bold;
  color: white;
  text-transform: uppercase;
`;
