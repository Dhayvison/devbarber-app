import * as React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

import HomeSVG from '../assets/home.svg';
import SearchSVG from '../assets/search.svg';
import TodaySVG from '../assets/today.svg';
import FavoriteSVG from '../assets/favorite.svg';
import AccountSVG from '../assets/account.svg';
import {Palette} from '../utils';

import {UserContext} from '../contexts/UserContext';

const TabArea = styled(View)`
  height: 60px;
  background-color: ${Palette.blue};
  flex-direction: row;
`;

const TabItem = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

const TabItemCenter = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  top: -20px;
  border: 3px solid ${Palette.blue};
  border-radius: 45px;
  background-color: white;
`;

const AvatarIcon = styled(Image)`
  height: 24px;
  width: 24px;
  border-radius: 12px;
`;

export default ({state, navigation}) => {
  const {state: user} = React.useContext(UserContext);
  const {navigate} = navigation;

  return (
    <TabArea>
      <TabItem
        disabled={state.index === 0}
        onPress={() => {
          navigate('Home');
        }}>
        <HomeSVG width="24" height="24" fill="white" />
      </TabItem>
      <TabItem
        disabled={state.index === 1}
        onPress={() => {
          navigate('Search');
        }}>
        <SearchSVG width="24" height="24" fill="white" />
      </TabItem>
      <TabItemCenter
        disabled={state.index === 2}
        onPress={() => {
          navigate('Appointments');
        }}>
        <TodaySVG width="24" height="24" fill={Palette.blue} />
      </TabItemCenter>
      <TabItem
        disabled={state.index === 3}
        onPress={() => {
          navigate('Favorites');
        }}>
        <FavoriteSVG width="24" height="24" fill="white" />
      </TabItem>
      <TabItem
        disabled={state.index === 4}
        onPress={() => {
          navigate('Profile');
        }}>
        {user.avatar ? (
          <AvatarIcon source={{uri: user.avatar}} />
        ) : (
          <AccountSVG width="24" height="24" fill="white" />
        )}
      </TabItem>
    </TabArea>
  );
};
