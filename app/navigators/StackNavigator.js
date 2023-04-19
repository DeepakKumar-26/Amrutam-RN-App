import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import BulletinNavigator from './BulletinNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{}}>
      {/* <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/> */}
      <Stack.Screen
        name="Bulletin"
        component={BulletinNavigator}
        options={{
          title: 'Bulletin',
          header: props => <HeaderNotifications {...props} />,
          cardStyle: {backgroundColor: '#ffffff'},
        }}
      />
    </Stack.Navigator>
  );
}


