import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabScreens from './BottomTab';
import SideBarScreens from './SideBar';
import {AppStackParamList} from '../types/types';
import AdoptScreen from '../screens/adopt/Adopt';
import DonateScreen from '../screens/donate/Donate';
import AddPetScreen from '../screens/addPet/AddPet';
import MessageScreen from '../screens/message/Message';
import ChangePassword from '../screens/changePassword/ChangePassword';

const AppStack = createStackNavigator<AppStackParamList>();

const AppStackScreens = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="BottomTabs"
      component={BottomTabScreens}
      options={{headerShown: false}}
    />
    <AppStack.Screen
      name="SideBar"
      component={SideBarScreens}
      options={{headerShown: false}}
    />
    <AppStack.Screen
      name="PetAdoption"
      component={AdoptScreen}
      options={{headerShown: true}}
    />
    <AppStack.Screen
      name="Donate"
      component={DonateScreen}
      options={{headerShown: true}}
    />
    <AppStack.Screen
      name="AddPet"
      component={AddPetScreen}
      options={{headerShown: true}}
    />
    <AppStack.Screen
      name="Message"
      component={MessageScreen}
      options={{headerShown: true}}
    />
    <AppStack.Screen
      name="ChangePassword"
      component={ChangePassword}
      options={{headerShown: true}}
    />
  </AppStack.Navigator>
);

export default AppStackScreens;
