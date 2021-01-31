import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import FullScreenContainer from '../../components/FullScreenContainer';
import {Wrapper, Loading} from './Preload.style';
import BarberSVG from '../../assets/barber.svg';
import Api from '../../api';
import {UserContext} from '../../contexts/UserContext';
import {setAvatar} from '../../contexts/actions/UserActions';

export default () => {
  const {dispatch} = React.useContext(UserContext);
  const {reset} = useNavigation();

  React.useEffect(() => {
    (async function checkToken() {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const json = await Api.checkToken(token);
        if (json.token) {
          await AsyncStorage.setItem('token', json.token);
          dispatch(setAvatar(json.data.avatar));
          reset({
            routes: [{name: 'MainTab'}],
          });
        } else {
          reset({
            routes: [{name: 'SignIn'}],
          });
        }
        reset({
          routes: [{name: 'MainTab'}],
        });
      } else {
        reset({
          routes: [{name: 'SignIn'}],
        });
      }
    })();
  }, []);

  return (
    <FullScreenContainer>
      <Wrapper>
        <BarberSVG width="100%" height="160" />
        <Loading size="large" color="white" />
      </Wrapper>
    </FullScreenContainer>
  );
};
