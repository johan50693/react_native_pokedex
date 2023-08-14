/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Tab1 } from './Tab1';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle= {{
        backgroundColor: 'white',
      }}
      screenOptions ={{
        tabBarActiveTintColor: '#5856d6',
        tabBarLabelStyle: {
          marginBottom: (Platform.OS === 'ios') ? 0 : 10,
        },
        tabBarStyle: {
          // backgroundColor: 'red',
          borderWidth: 0,
          elevation: 0,
          height: (Platform.OS === 'ios') ? 0 : 60,
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.9)',
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
          name="HomeScreen"
          component={Tab1}
          options={{
            tabBarLabel: 'Listado',
            tabBarIcon: ({color}) => (
                      <Icon
                            name="list-outline"
                            color={color}
                            size={25} />
            ),
          }}
      />
      <Tab.Screen
          name="Search"
          component={Tab2Screen}
          options={{
            tabBarLabel: 'Búsqueda',
            tabBarIcon: ({color}) => (
                      <Icon
                            name="search-outline"
                            color={color}
                            size={25} />
            ),
          }}
      />
    </Tab.Navigator>
  );
};
