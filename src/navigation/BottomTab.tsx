import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../constants/Colors';
import {tabScreens} from '../constants/tabScreen/TabScreen';

const Tab = createBottomTabNavigator();

const BottomTabScreens = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'black',
      tabBarActiveBackgroundColor: colors.fText,
      tabBarInactiveBackgroundColor: 'transparent',
      tabBarStyle: {
        height: 60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      tabBarItemStyle: {
        margin: 5,
        borderRadius: 15,
        padding: 5,
      },
    }}>
    {tabScreens?.map(({name, component, icon: Icon, iconName}) => (
      <Tab.Screen
        key={name}
        name={name}
        component={component}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name={iconName} size={size} color={color} />
          ),
        }}
      />
    ))}
  </Tab.Navigator>
);

export default BottomTabScreens;
