import * as React from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../../api';
import {
  Wrapper,
  UserInfo,
  UserAvatar,
  UserName,
  UserEmail,
  LogOutButton,
  Strong,
} from './Profile.style';
import {UserContext} from '../../contexts/UserContext';
import {Palette} from '../../utils';

export default () => {
  const {state: user} = React.useContext(UserContext);
  const {navigate} = useNavigation();

  async function handleLogOut() {
    Alert.alert('Sair do Aplicativo', 'Deseja mesmo sair?', [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Sair',
        onPress: async () => {
          await Api.logOut();
          await AsyncStorage.setItem('token', '');
          navigate('Preload');
        },
      },
    ]);
  }

  return (
    <Wrapper>
      <UserInfo source={{uri: user.avatar}} imageStyle={{opacity: 0.1}}>
        <UserAvatar source={{uri: user.avatar}} />
        <UserName>{user.name + ' Braga Mendonça'}</UserName>
        <UserEmail>{user.email}</UserEmail>
      </UserInfo>

      <LogOutButton onPress={handleLogOut} underlayColor={Palette.red}>
        <Strong>Sair</Strong>
      </LogOutButton>
    </Wrapper>
  );
};
