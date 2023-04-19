import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './app/navigators/StackNavigator';
import BottomTabNavigator from './app/navigators/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
