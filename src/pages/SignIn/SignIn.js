import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import Api from '../../api';
import FullScreenContainer from '../../components/FullScreenContainer';
import CustomInput from '../../components/CustomInput';
import {
  Wrapper,
  InputArea,
  SignInButton,
  SignUpButton,
  ButtonText,
  Strong,
  ErrorMessage,
} from './SignIn.style';
import {UserContext} from '../../contexts/UserContext';
import {setAvatar} from '../../contexts/actions/UserActions';
import {Palette} from '../../utils';
import BarberSVG from '../../assets/barber.svg';
import EmailSVG from '../../assets/email.svg';
import LockSVG from '../../assets/lock.svg';

export default () => {
  const {dispatch} = React.useContext(UserContext);
  const {reset} = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [erro, setErro] = React.useState('');

  function handleClickSignUp() {
    reset({
      routes: [{name: 'SignUp'}],
    });
  }

  async function handleClickSignIn() {
    setIsSubmitting(true);
    setErro('');
    if (email && password) {
      const json = await Api.signIn(email, password);

      if (json.token) {
        await AsyncStorage.setItem('token', json.token);
        dispatch(setAvatar(json.data.avatar));
        reset({
          routes: [{name: 'MainTab'}],
        });
      } else {
        setErro(json.error);
      }
    } else {
      setErro('Por favor, preencha todos os campos');
    }
    setIsSubmitting(false);
  }

  return (
    <FullScreenContainer>
      <Wrapper>
        <BarberSVG height="20%" />

        <InputArea>
          <CustomInput
            Icon={EmailSVG}
            placeholder="Digite seu email"
            value={email}
            type="email"
            onChangeText={(text) => setEmail(text)}
          />
          <CustomInput
            Icon={LockSVG}
            placeholder="Digite sua senha"
            value={password}
            type="password"
            onChangeText={(text) => setPassword(text)}
          />
          {erro ? <ErrorMessage>{erro}</ErrorMessage> : null}

          <SignInButton onPress={handleClickSignIn}>
            {isSubmitting ? (
              <ActivityIndicator color={Palette.light} />
            ) : (
              <Strong>Entrar</Strong>
            )}
          </SignInButton>
        </InputArea>

        <SignUpButton onPress={handleClickSignUp}>
          <ButtonText>Ainda não possui uma conta?</ButtonText>
          <Strong>Cadastre-se</Strong>
        </SignUpButton>
      </Wrapper>
    </FullScreenContainer>
  );
};
