import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components';
import {Palette} from '../utils';
import Stars from './Stars';

const ItemArea = styled(TouchableOpacity)`
  flex-direction: row;
  background-color: ${Palette.light};
  border-radius: 10px;
  margin-bottom: 15px;
  overflow: hidden;
`;

const Avatar = styled(Image)`
  width: 100px;
  height: 100px;
`;

const Info = styled(View)`
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

const BarberName = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: ${Palette.dark};
`;

export default ({barberInfo}) => {
  const {id, name, avatar, stars} = barberInfo;
  return (
    <ItemArea activeOpacity={0.8}>
      <Avatar source={{uri: avatar}} />
      <Info>
        <BarberName>{name}</BarberName>
        <Stars stars={stars} showText={true} />
      </Info>
    </ItemArea>
  );
};
