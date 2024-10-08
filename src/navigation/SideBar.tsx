import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {stackScreens} from '../constants/stackScreen/StackScreen';

const Stack = createStackNavigator();

const SideBarScreens = () => (
  <Stack.Navigator>
    {stackScreens.map(({name, component}) => (
      <Stack.Screen key={name} name={name} component={component} />
    ))}
  </Stack.Navigator>
);

export default SideBarScreens;
