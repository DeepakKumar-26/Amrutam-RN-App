import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {blogs} from '../data/blogs';
import {lookingFor} from '../data/lookingFor';
import {doctors} from '../data/doctors';
import {activities} from '../data/activity';
import {moods} from '../data/moods';
import {recentOrders} from '../data/recentOrders';
import {shopByCategory} from '../data/shopCategories';
import {daysOfWeek, months} from '../data/calender';

const {height, width} = Dimensions.get('window');
// ACTIVITY COMPONENT
const Activity = ({item}) => {
  return (
    <TouchableOpacity style={styles.activity}>
      <Image source={item.icon_left} style={{height: 40, width: 40}} />
      <View>
        {!item.is_data_available && (
          <Text style={{color: Color.primary, fontSize: 10}}>
            Health Data is not available
          </Text>
        )}
        <Text style={{color: Color.primary, fontSize: 15}}>
          {item.desc} <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
        </Text>
      </View>
      <Icon name={item.icon_right} size={30} color={Color.primary} />
    </TouchableOpacity>
  );
};

const ProductCategory = ({item}) => {
  return (
    <TouchableOpacity style={{alignItems: 'center', margin: 5}}>
      <View style={styles.shop}>
        <Image source={item.image} style={{width: 40, height: 40}} />
      </View>
      <Text style={{color: '#5F5F5F'}}>{item.category}</Text>
    </TouchableOpacity>
  );
};

const Blog = ({item}) => {
  return (
    <TouchableOpacity style={styles.containerBlog}>
      <View style={{flex: 1, padding: 10, justifyContent: 'space-between'}}>
        <Text numberOfLines={3} style={{color: 'black'}}>
          {item.title}
        </Text>
        <TouchableOpacity style={styles.btnReadMore}>
          <Text style={{color: '#ffffff'}}>Read More</Text>
        </TouchableOpacity>
        <Text style={{color: 'black'}}>{item.posted_at}</Text>
      </View>

      <ImageBackground source={require('../assets/photo.png')}>
        <Image
          source={{
            uri: item?.thumbnail_url,
          }}
          resizeMode="cover"
          style={{width: 120, flex: 1}}
        />
      </ImageBackground>
    </TouchableOpacity>
  );
};

const RecentOrder = ({item}) => {
  return (
    <TouchableOpacity style={styles.containerOrders}>
      <Image
        source={{
          uri: item.thumbnail_url,
        }}
        style={{height: 120, width: 120}}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          justifyContent: 'center',
        }}>
        <Text numberOfLines={3} style={{color: 'black'}}>
          {item.title}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: Color.primary,
              fontWeight: 'bold',
              marginRight: 10,
            }}>
            {'\u20B9'} {item.discounted_price}
          </Text>
          <Text
            style={{
              fontSize: 12,
              textDecorationLine: 'line-through',
              color: 'black',
            }}>
            {'\u20B9'} {item.original_price}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="arrow-u-left-top" size={25} color={Color.primary} />
          <Text style={{color: Color.primary}}>Reorder</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ItemLookinFor = ({item}) => {
  return (
    <TouchableOpacity style={styles.containerCardLookingFor}>
      <View style={styles.containerImage_LookingFor}>
        <Image source={item.thumbnail_url} style={{height: 50, width: 50}} />
      </View>
      <Text style={styles.textTitle_Prods}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const Doctor = ({item}) => {
  return (
    <TouchableOpacity style={styles.containerDoctorCard}>
      <Image
        source={{
          uri: item.profile_image,
        }}
        style={{height: 150, width: 200}}
      />
      <Text style={styles.textDoctorName}>{item.name}</Text>
      <TouchableOpacity style={styles.btnFollow}>
        <Text style={{color: '#ffffff'}}>Follow</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default function Home() {
  const [showCard, setShowCard] = useState(true);
  const [sliderValue, setSliderValue] = useState(.5);
  const date = new Date();

  const currentMonth = months[date.getMonth()];
  const currentDate = date.getDate();
  const currentDay = daysOfWeek[date.getDay()];

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
      }}>
      {/* Greetings */}
      <View style={{marginVertical: 10}}>
        <Text style={{color: Color.primary}}>
          {currentDay}, {currentDate} {currentMonth}
        </Text>
        <Text style={{color: Color.primary, fontSize: 18, fontWeight: 'bold'}}>
          Namaste, Angela
        </Text>
      </View>

      {/* Dismissible Card - How are you feeling today? */}
      {showCard && (
        <View
          style={{backgroundColor: '#FFF7E2', padding: 10, borderRadius: 10}}>
          <Icon
            onPress={() => setShowCard(!showCard)}
            name="close"
            size={20}
            color={Color.primary}
            style={{alignSelf: 'flex-end'}}
          />
          <Text style={{color: Color.primary, fontSize: 15}}>
            How are you <Text style={{fontWeight: 'bold'}}>feeling</Text> today?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            {moods.map(item => (
              <Icon
                name={item.icon}
                size={
                  (sliderValue === 0
                    ? item.value_min <= sliderValue
                    : item.value_min < sliderValue) &&
                  sliderValue <= item.value_max
                    ? 50
                    : 30
                }
                color={Color.primary}
                key={item.id}
              />
            ))}
          </View>

          <View>
            <Slider
              minimumValue={0}
              maximumValue={1}
              onValueChange={value => setSliderValue(value)}
              value={sliderValue}
              minimumTrackTintColor={Color.primary}
              maximumTrackTintColor="grey"
              thumbTintColor={Color.primary}
            />
          </View>
        </View>
      )}

      {/* Activities - SLeeping,walking,screentime*/}
      <View style={{marginVertical: 10}}>
        {activities.map(item => (
          <Activity item={item} key={item.id} />
        ))}
      </View>

      {/* Shop for Health & Beauty */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.textSectionTitle}>Shop for Health & Beauty</Text>
        <Icon name="chevron-right" color={Color.primary} size={25} />
      </View>

      <FlatList
        horizontal
        data={shopByCategory}
        keyExtractor={(item, index) => item + index}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ProductCategory item={item} />}
      />

      {/* Upcoming Appointments */}
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 10,
          }}>
          <Text style={styles.textSectionTitle}>Upcoming Appointments</Text>
          <Text style={{color: Color.primary}}>Clear</Text>
        </View>

        <View style={styles.container_Appointment}>
          <Icon name="calendar-check" color={Color.primary} size={25} />
          <View style={{flex: 1, marginHorizontal: 5}}>
            <Text style={{color: Color.primary}}>No New Appointments</Text>
          </View>
          <TouchableOpacity>
            <Text style={{color: Color.primary, fontWeight: 'bold'}}>
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </>

      {/* Recent Orders */}
      <View style={{marginVertical: 10}}>
        <Text style={styles.textSectionTitle}>Recent Orders</Text>
        <FlatList
          horizontal
          data={recentOrders}
          keyExtractor={(item, index) => item + index}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <RecentOrder item={item} />}
          ItemSeparatorComponent={<View style={{width: 10}} />}
        />
      </View>

      {/* Amrutam Blog */}
      <View style={{marginVertical: 10}}>
        <Text style={styles.textSectionTitle}>Amrutam Blog</Text>

        <FlatList
          horizontal
          data={blogs}
          keyExtractor={(item, index) => item + index}
          ItemSeparatorComponent={<View style={{width: 10}} />}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Blog item={item} />}
        />
      </View>

      {/* What are you looking for ? */}
      <View style={{marginVertical: 10}}>
        <Text style={styles.textSectionTitle}>What are you looking for ?</Text>

        <FlatList
          horizontal
          data={lookingFor}
          keyExtractor={(item, index) => item + index}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <ItemLookinFor item={item} />}
          contentContainerStyle={{
            justifyContent: 'space-between',
            flexGrow: 1,
          }}
        />
      </View>

      {/* Top Rated Doctors */}
      <View style={{marginVertical: 5}}>
        <Text style={styles.textSectionTitle}>Top Rated Doctors</Text>
        <FlatList
          horizontal
          data={doctors}
          keyExtractor={(item, index) => item + index}
          ItemSeparatorComponent={<View style={{width: 10}} />}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Doctor item={item} />}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  activity: {
    marginVertical: 5,
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 5,
    shadowColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnFollow: {
    alignSelf: 'center',
    backgroundColor: '#547855',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  btnReadMore: {
    backgroundColor: '#547855',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDoctorCard: {
    width: 200,
    elevation: 3,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingBottom: 10,
    marginVertical: 10,
  },
  container_Appointment: {
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#547855',
    borderRadius: 10,
  },
  containerBlog: {
    flexDirection: 'row',
    marginVertical: 10,
    width: width * 0.7,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    backgroundColor: '#ffffff',
  },
  containerCardLookingFor: {
    backgroundColor: '#ffffff',
    width: 100,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 1,
  },
  containerImage_LookingFor: {
    backgroundColor: '#FFF7E2',
    height: 100,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerOrders: {
    flexDirection: 'row',
    marginVertical: 10,
    width: width * 0.8,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  emoji: {
    height: 50,
    aspectRatio: 1,
    backgroundColor: '#547855',
    borderRadius: 100,
  },
  shop: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#FFF7E2',
  },
  textDoctorName: {
    color: '#547855',
    marginVertical: 10,
    alignSelf: 'center',
  },
  textTitle_Prods: {
    color: '#547855',
    marginVertical: 5,
    alignSelf: 'center',
  },
  textSectionTitle: {
    color: '#547855',
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
export const Color = {
  primary: '#547855',
};
