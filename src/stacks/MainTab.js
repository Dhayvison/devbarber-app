import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Appointments from '../pages/Appointments/Appointments';
import Favorites from '../pages/Favorites/Favorites';
import Profile from '../pages/Profile/Profile';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    initialRouteName="Appointments"
    tabBar={(props) => <CustomTabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Appointments" component={Appointments} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
