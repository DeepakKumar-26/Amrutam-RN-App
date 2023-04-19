import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {notifications} from '../../data/notifications';

export default function Notifications() {
  const NotificationItem = ({
    notification_type,
    notice_title,
    notice,
    posted_on,
    status,
  }) => {
    return (
      <View
        style={{
          height: 100,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 10,
          backgroundColor: '#ffffff',
          elevation: 3,
          padding: 10,
        }}>
        <View
          style={{
            height: 70,
            width: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={notification_type}
            size={50}
            color={status === 'failed' ? 'crimson' : Color.primary}
          />
        </View>
        <View style={{height: '100%', flex: 1, justifyContent: 'space-evenly'}}>
          {notice_title && (
            <Text numberOfLines={1} style={{color: 'black'}}>
              {notice_title}
            </Text>
          )}
          <Text numberOfLines={2} style={{color: 'black'}}>
            {notice}
          </Text>
          <Text style={{fontSize: 12}}>{posted_on}</Text>
        </View>
      </View>
    );
  };

  const ListEmpty = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: Color.primary, fontSize: 18, fontWeight: 'bold'}}>
          No new notifications!
        </Text>
        <Image
          source={require('../../assets/lotus.png')}
          style={{height: 150, width: 150}}
        />
        <Text style={{color: 'black'}}>
          Check this section for updates and special offers.
        </Text>
      </View>
    );
  };
  return (
    <FlatList
      data={notifications}
      keyExtractor={(item, index) => item + index}
      ItemSeparatorComponent={<View style={{height: 5}} />}
      contentContainerStyle={{flexGrow: 1, padding: 10}}
      ListEmptyComponent={<ListEmpty />}
      renderItem={({item}) => (
        <NotificationItem
          notification_type={item.notice_type}
          notice_title={item.title}
          notice={item.notice}
          posted_on={item.posted_on}
          status={item.status}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
const Color = {
  primary: '#547855',
};
