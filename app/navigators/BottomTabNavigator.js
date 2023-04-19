import {
  Alert,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import Home from '../screens/Home/Home';
import BulletinNavigator from './BulletinNavigator';
import HeaderBulletin from '../components/HeaderBulletin';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Store from '../screens/Store';
import Orders from '../screens/Orders';
import Consult from '../screens/Consult';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

// SCREEN OPTIONS STARTS
const screenOptions = {
  tabBarActiveTintColor: '#547855',
  tabBarBadgeStyle: {backgroundColor: '#547855'},
  headerShadowVisible: false,
  headerTintColor: '#547855',
  headerLeftContainerStyle: {
    // paddingHorizontal: 5,
    flexDirection: 'row',
  },
  headerRightContainerStyle: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  tabBarStyle: {
    height: 60,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
  },
};
// SCREEN OPTIONS ENDS HERE

// HEADER ITEM COMPONENTS STARTS HERE
export const HeaderMenu = props => {
  return (
    <TouchableOpacity style={styles.headerItemContainer}>
      <Icon name="menu" size={30} color={props.tintColor} />
    </TouchableOpacity>
  );
};
export const HeaderProfileImage = props => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Profile', 'Open Profile')}
      style={styles.headerItemContainer}>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={{height: 40, width: 40, borderRadius: 10}}
      />
    </TouchableOpacity>
  );
};
export const HeaderChevronLeft = props => {
  // console.log(props);
  // if (props.canGoBack !== true) return null;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.headerItemContainer}>
      <Icon
        name="chevron-left-circle-outline"
        size={30}
        color={props.tintColor}
      />
    </TouchableOpacity>
  );
};
export const HeaderSearch = props => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Search', 'Open Search')}
      style={styles.headerItemContainer}>
      <Icon name="magnify" size={30} color={props.tintColor} />
    </TouchableOpacity>
  );
};
export const HeaderCart = props => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Cart', 'Open Cart')}
      style={styles.headerItemContainer}>
      <Icon name="cart-variant" size={30} color={props.tintColor} />
      <View style={styles.cartBadge}>
        <Text style={{fontSize: 10, color: '#ffffff'}}>2</Text>
      </View>
    </TouchableOpacity>
  );
};
// HEADER ITEM COMPONENTS ENDS HERE

// BOTTOM TAB NAVIGATOR STARTS HERE
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: '#ffffff'}}
      screenOptions={screenOptions}>
      <Tab.Screen
        name="Home Navigator"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          title: 'Store',
          tabBarIcon: ({color, size}) => (
            <Icon name="storefront-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          title: 'Orders',
          tabBarIcon: ({color, size}) => (
            <Icon name="list-status" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Consult"
        component={Consult}
        options={{
          title: 'Consult',
          tabBarIcon: ({color, size}) => (
            <Icon name="stethoscope" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Bulletin"
        component={BulletinNavigator}
        options={{
          title: 'Bulletin',
          tabBarBadge: 3,
          tabBarIcon: ({color, size}) => (
            <Icon name="flower" color={color} size={size} />
          ),
          headerLeft: props => <HeaderChevronLeft {...props} />,
          headerRight: props => (
            <>
              <HeaderSearch {...props} />
              <HeaderCart {...props} />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
// BOTTOM TAB NAVIGATOR ENDS HERE

const styles = StyleSheet.create({
  cartBadge: {
    minHeight: 20,
    minWidth: 20,
    padding: 2,
    position: 'absolute',
    top: 2,
    right: 2,
    borderRadius: 100,
    backgroundColor: '#547855',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerItemContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

// ................................
// const tabScreens = [
//   {
//     name: 'Home',
//     component: Home,
//     title: 'Home',
//     tabBarIcon: 'home',
//     headerLeft: [
//       {
//         icon: 'menu',
//         onPress: () => Alert.alert('Hii', 'uionuw'),
//       },
//       {
//         icon: 'chevron-left-circle-outline',
//         onPress: () => Alert.alert('Hii', 'uionuw'),
//       },
//     ],
//     headerRight: [],
//   },
//   {
//     name: 'Store',
//     component: Store,
//     title: 'Store',
//     tabBarIcon: 'storefront-outline',
//     headerLeft: [],
//     headerRight: [],
//   },
//   {
//     name: 'Orders',
//     component: Orders,
//     title: 'Orders',
//     tabBarIcon: 'list-status',
//     headerLeft: [],
//     headerRight: [],
//   },
//   {
//     name: 'Consult',
//     component: Consult,
//     title: 'Consult',
//     tabBarIcon: 'stethoscope',
//     headerLeft: [],
//     headerRight: [],
//   },
// ];

// export default function BottomTabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={screenOptions}
//       sceneContainerStyle={{backgroundColor: '#ffffff'}}>
//       {tabScreens.map(item => (
//         <Tab.Screen
//           name={item.name}
//           component={item.component}
//           options={{
//             title: item.name,
//             tabBarIcon: ({color, size}) => (
//               <Icon name={item.tabBarIcon} color={color} size={size} />
//             ),
//             headerLeft: props =>
//               item.headerLeft.map(item => (
//                 <TouchableOpacity
//                   key={item.icon}
//                   onPress={item.onPress}
//                   style={styles.headerItemContainer}>
//                   <Icon name={item.icon} size={30} color={props.tintColor} />
//                 </TouchableOpacity>
//               )),
//           }}
//         />
//       ))}
//     </Tab.Navigator>
//   );
// }
