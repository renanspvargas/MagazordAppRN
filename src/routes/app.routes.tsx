import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TodoPage} from '../modules/todo/pages/todo.page';
import {WeatherPge} from '../pages/weather.page';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Todo" component={TodoPage} />
        <Tab.Screen name="Weather" component={WeatherPge} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
