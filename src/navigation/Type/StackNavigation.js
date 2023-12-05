import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackRoute} from '../NavigationRoutes';
import {StackNav} from '../NavigationKeys';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={StackNav.Splash}>
      <Stack.Screen name={StackNav.Splash} component={StackRoute.Splash} />
      <Stack.Screen
        name={StackNav.WelcomeScreen}
        component={StackRoute.WelcomeScreen}
      />
       <Stack.Screen
        name={StackNav.HomeTab}
        component={StackRoute.HomeTab}
      />
       <Stack.Screen
        name={StackNav.AudioFiles}
        component={StackRoute.AudioFiles}
      />
       <Stack.Screen
        name={StackNav.ListScreen}
        component={StackRoute.ListScreen}
      />
      <Stack.Screen
        name={StackNav.Music}
        component={StackRoute.Music}
      />
       <Stack.Screen
        name={StackNav.DetailScreen}
        component={StackRoute.DetailScreen}
      />
      
      {/* <Stack.Screen
        name={StackNav.onBoarding}
        component={StackRoute.OnBoarding}
      /> */}
    </Stack.Navigator>
  );
}
