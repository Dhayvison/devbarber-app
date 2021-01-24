import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Api from '../../api';
import FullScreenContainer from '../../components/FullScreenContainer';
import CustomInput from '../../components/CustomInput';
import {
  Wrapper,
  InputArea,
  SignUpButton,
  SignInButton,
  ButtonText,
  Strong,
  ErrorMessage,
} from './SignUp.style';
import {Palette} from '../../utils';
import BarberSVG from '../../assets/barber.svg';
import PersonSVG from '../../assets/person.svg';
import EmailSVG from '../../assets/email.svg';
import LockSVG from '../../assets/lock.svg';

export default () => {
  const {reset} = useNavigation();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [erro, setErro] = React.useState('');
  // const [passwordConfirm, setPasswordConfirm] = React.useState('');

  function handleClickSignIn() {
    reset({
      routes: [{name: 'SignIn'}],
    });
  }

  async function handleClickSignUp() {
    setIsSubmitting(true);
    setErro('');
    if (name && email && password) {
      const json = await Api.signUp(name, email, password);

      if (json.error) {
        setErro(json.error);
      } else {
        alert('Cadastro realizado com sucesso!');
        reset({
          routes: [{name: 'SignIn'}],
        });
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
            Icon={PersonSVG}
            placeholder="Nome"
            type="name"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <CustomInput
            Icon={EmailSVG}
            placeholder="E-mail"
            value={email}
            type="email"
            onChangeText={(text) => setEmail(text)}
          />

          <CustomInput
            Icon={LockSVG}
            placeholder="Defina uma senha"
            value={password}
            type="password"
            onChangeText={(text) => setPassword(text)}
          />

          {/* <CustomInput
            Icon={LockSVG}
            placeholder="Confirme a senha"
            value={passwordConfirm}
            type="password"
            onChangeText={(text) => setPasswordConfirm(text)}
          /> */}

          {erro ? <ErrorMessage>{erro}</ErrorMessage> : null}

          <SignUpButton onPress={handleClickSignUp}>
            {isSubmitting ? (
              <ActivityIndicator color={Palette.light} />
            ) : (
              <Strong>Cadastrar</Strong>
            )}
          </SignUpButton>
        </InputArea>

        <SignInButton onPress={handleClickSignIn}>
          <ButtonText>Já possui uma conta?</ButtonText>
          <Strong>Faça Login</Strong>
        </SignInButton>
      </Wrapper>
    </FullScreenContainer>
  );
};
