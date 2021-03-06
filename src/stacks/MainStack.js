import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

import Preload from '../pages/Preload/Preload';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import MainTab from '../stacks/MainTab';

import {Palette} from '../utils';

const Stack = createStackNavigator();

export default () => (
  <>
    <StatusBar backgroundColor={Palette.cyan} />
    <Stack.Navigator headerMode="none" initialRouteName="Preload">
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  </>
);
