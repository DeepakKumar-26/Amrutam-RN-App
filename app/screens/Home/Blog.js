import {StyleSheet, ScrollView, Image, Text, View} from 'react-native';
import React from 'react';

export default function Blog({navigation, route}) {
  console.log(route.params);
  const {blog} = route.params;

  return (
    <ScrollView contentContainerStyle={{marginHorizontal: 10}}>
      <Image
        source={{uri: blog.thumbnail_url}}
        style={{
          width: '100%',
          height: 300,
          borderRadius: 10,
          marginVertical: 10,
        }}
      />

      <View>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#547855'}}>
          {blog.title}
        </Text>

        <Text>
          {blog.posted_by} {blog.posted_at}
        </Text>
        <View style={{paddingVertical: 5}}>
          <Text style={{color:'black',lineHeight:18}}>{blog.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
