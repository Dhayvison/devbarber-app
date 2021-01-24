import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import FullScreenContainer from '../../components/FullScreenContainer';
import {Wrapper, Loading} from './Preload.style';
import BarberSVG from '../../assets/barber.svg';

export default () => {
  const {reset} = useNavigation();

  React.useEffect(() => {
    (async function checkToken() {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        //validar token
      } else {
        reset({
          routes: [{name: 'SignIn'}],
        });
        // navigate('SignIn');
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
