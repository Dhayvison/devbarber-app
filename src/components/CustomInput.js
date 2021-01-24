import React from 'react';
import {KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {Palette} from '../utils';
import EyeSVG from '../assets/eye.svg';

const InputArea = styled(KeyboardAvoidingView)`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin-bottom: 15px;
  border-radius: 30px;
  background-color: ${Palette.light};
`;

const Input = styled(TextInput)`
  flex: 1;
  color: ${Palette.dark};
  font-weight: bold;
  font-size: 20px;
  margin-left: 5px;
`;

export default ({Icon, placeholder, value, onChangeText, type}) => {
  const [showPass, setShowPass] = React.useState(true);

  const PROPS_BY_TYPE = {
    name: {
      autoCompleteType: 'off',
      autoCapitalize: 'words',
      autoCorrect: false,
    },
    email: {
      autoCapitalize: 'none',
      autoCompleteType: 'email',
      keyboardType: 'email-address',
    },
    password: {
      secureTextEntry: showPass,
      autoCapitalize: 'none',
    },
  };

  return (
    <InputArea>
      <Icon width="20" height="20" fill={Palette.dark} />
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...PROPS_BY_TYPE[type]}
      />
      {type === 'password' && (
        <TouchableOpacity onPress={() => setShowPass((show) => !show)}>
          <EyeSVG width="20" height="20" fill={Palette.dark} />
        </TouchableOpacity>
      )}
    </InputArea>
  );
};
