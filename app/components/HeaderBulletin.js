import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function HeaderBulletin(props) {
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 60,
              width: '100%',
              padding: 10,
              backgroundColor: 'white',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Icon name="chevron-left-circle-outline" size={30} color='#547855' />
            </TouchableOpacity>
      
            <View
              style={{
                flex: 1,
                height: '100%',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#547855', fontWeight: 'bold'}}>
                {props.options.title}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Icon name="magnify" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Icon name="cart-variant" size={30} />
            </TouchableOpacity>
          </View>
        );
      };
      