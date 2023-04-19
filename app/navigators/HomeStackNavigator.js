import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Blogs from '../screens/Home/Blogs';
import {
  HeaderCart,
  HeaderChevronLeft,
  HeaderMenu,
  HeaderProfileImage,
  HeaderSearch,
} from './BottomTabNavigator';
import Blog from '../screens/Home/Blog';

const Stack = createStackNavigator();
export default function HomeStackNavigator() {
  const screenOptions = {
    tabBarActiveTintColor: '#547855',
    tabBarBadgeStyle: {backgroundColor: '#547855'},
    headerShadowVisible: false,
    headerTintColor: '#547855',
    headerLeftContainerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerRightContainerStyle: {
      paddingHorizontal: 5,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    cardStyle:{backgroundColor:'#ffffff'}
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerLeft: props => <HeaderMenu {...props} />,
          headerRight: props => (
            <>
              <HeaderSearch {...props} />
              <HeaderCart {...props} />
              <HeaderProfileImage {...props} />
            </>
          ),
        }}
      />
      <Stack.Screen
        name="Blogs"
        component={Blogs}
        options={{
          title: 'Amrutam Blogs',
          headerLeft: props => <HeaderChevronLeft {...props} />,
          headerRight: props => (
            <>
              <HeaderSearch {...props} />
              <HeaderCart {...props} />
              <HeaderProfileImage {...props} />
            </>
          ),
        }}
      />
      <Stack.Screen
        name="Blog"
        component={Blog}
        options={{
          title: 'Amrutam Blogs',
          headerLeft: props => <HeaderChevronLeft {...props} />,
          headerRight: props => (
            <>
              <HeaderSearch {...props} />
              <HeaderCart {...props} />
              <HeaderProfileImage {...props} />
            </>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
