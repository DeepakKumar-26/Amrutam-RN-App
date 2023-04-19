import {
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {blogs, featuredPosts, postCategories} from '../../data/blogs';
import {ListEmpty} from '../Bulletin/Notifications';

const {height, width} = Dimensions.get('window');

// Featured Post Component
const FeaturedPost = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Blog', {blog: item});
      }}
      style={styles.containerFeaturedPost}>
      <Image
        source={{
          uri: item.thumbnail_url,
        }}
        style={{height: 200, width: '100%'}}
      />
      <View style={{padding: 10}}>
        <Text numberOfLines={3} style={{fontWeight: 'bold'}}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const BlogPostItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Blog', {blog: item});
      }}
      style={styles.containerBlogPostItem}>
      <Image
        source={{
          uri: item.thumbnail_url,
        }}
        style={{height: 120, aspectRatio: 1}}
      />
      <View style={{padding: 10, flex: 1, justifyContent: 'space-evenly'}}>
        <Text numberOfLines={2} style={{color: 'black'}}>
          {item.title}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text>{item.posted_by} </Text>
          <Text>{item.posted_at}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// List Header Component for Flatlist
const ListHeader = ({category, setCategory}) => {
  return (
    <>
      {/* Horizontal Posts */}
      <FlatList
        horizontal
        data={featuredPosts}
        keyExtractor={(item, index) => item + index}
        contentContainerStyle={{paddingVertical: 10}}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={<View style={{width: 10}} />}
        renderItem={({item}) => <FeaturedPost item={item} />}
      />

      {/* Categories */}
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <FlatList
          horizontal
          data={postCategories}
          keyExtractor={(item, index) => item + index}
          contentContainerStyle={{paddingVertical: 5}}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={<View style={{width: 5}} />}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => setCategory(item.category)}
              style={{
                backgroundColor:
                  category === item.category ? '#547855' : '#FFF7E2',
                padding: 10,
                borderRadius: 10,
                elevation: 2,
              }}>
              <Text
                style={{
                  color: category === item.category ? '#ffffff' : 'black',
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

// Main Screen
export default function Blogs() {
  const [category, setCategory] = useState('top-posts');
  return (
    <View style={styles.container}>
      <FlatList
        data={blogs}
        keyExtractor={(item, index) => item + index}
        contentContainerStyle={{flexGrow: 1, marginHorizontal: 10}}
        ListHeaderComponent={
          <ListHeader category={category} setCategory={setCategory} />
        }
        renderItem={({item}) =>
          item.category === category && <BlogPostItem item={item} />
        }
        ListEmptyComponent={
          <ListEmpty
            title="No Posts Available"
            subTitle="Stay updated !, no post available for this category."
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBlogPostItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 2,
    overflow: 'hidden',
    marginVertical: 5,
  },
  containerFeaturedPost: {
    width: width * 0.5,
    backgroundColor: '#ffffff',
    elevation: 3,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
