import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {notifications} from '../../data/notifications';

export const ListEmpty = ({title,subTitle}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: Color.primary, fontSize: 18, fontWeight: 'bold'}}>
       {title}
      </Text>
      <Image
        source={require('../../assets/lotus.png')}
        style={{height: 150, width: 150}}
      />
      <Text style={{color: 'black',textAlign:'center'}}>
        {subTitle}
      </Text>
    </View>
  );
};
export default function Notifications() {
  const NotificationItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.containerNoticeItem}>
        <View style={styles.container_Notice_Icon}>
          <Icon
            name={item?.notice_type}
            size={50}
            color={item.status === 'failed' ? 'crimson' : Color.primary}
          />
        </View>
        <View style={{height: '100%', flex: 1, justifyContent: 'space-evenly'}}>
          {item.notice_title && (
            <Text numberOfLines={1} style={{color: 'black'}}>
              {item.notice_title}
            </Text>
          )}
          <Text numberOfLines={2} style={{color: 'black'}}>
            {item.notice}
          </Text>
          <Text style={{fontSize: 12}}>{item.posted_on}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={notifications}
      keyExtractor={(item, index) => item + index}
      ItemSeparatorComponent={<View style={{height: 5}} />}
      contentContainerStyle={{flexGrow: 1, padding: 10}}
      ListEmptyComponent={<ListEmpty title='No new notifications!' subTitle='Check this section for updates and special offers.' />}
      renderItem={({item}) => <NotificationItem item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  containerNoticeItem: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 3,
    padding: 10,
  },
  container_Notice_Icon: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const Color = {
  primary: '#547855',
};
