import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Notifications from '../screens/Bulletin/Notifications';
import Chats from '../screens/Bulletin/Chats';

const Tab = createMaterialTopTabNavigator();

export default function BulletinNavigator() {
  const [focussed, setFocussed] = useState('notification');
  // const tabBackground = focussed ? 'crimson' : 'lightgrey';
  return (
    <View style={{flex: 1}}>
      <View style={{height: 50, flexDirection: 'row', paddingHorizontal: 10}}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => setFocussed('notification')}
            style={{
              paddingVertical: 10,
              backgroundColor:
                focussed === 'notification' ? '#547855' : '#FFF7E2',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: focussed === 'notification' ? '#ffffff' : 'black',
              }}>
              Notifications
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{width: 5}} />
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => setFocussed('chat')}
            style={{
              paddingVertical: 10,
              backgroundColor: focussed === 'chat' ? '#547855' : '#FFF7E2',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: focussed === 'chat' ? '#ffffff' : 'black'}}>
              Chat
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {focussed === 'notification' ? <Notifications /> : <Chats />}
    </View>
  );
}

const styles = StyleSheet.create({});
