import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Tweet() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.tweetItem}
      onPress={() => {
        navigation.navigate('TweetDetail');
      }}
    >
      <View style={styles.tweetItemLeft}>
        <Image
          style={styles.userImage}
          source={require('../../assets//MyProfileImage.png')}
        />
      </View>
      <View style={styles.tweetItemRight}>
        <View style={styles.tweetHeader}>
          <Text style={styles.tweetUsername}>持持 一太</Text>
          <Text style={styles.tweetUserId}>@moti1ta</Text>
          <Text style={styles.tweetPostedAt}>15m</Text>
        </View>
        <Text style={styles.tweetMessage}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, ...
        </Text>
        <View style={styles.tweetActivities}>
          <TouchableOpacity
            style={styles.touchableOpacityArea}
            onPress={() => {
              navigation.navigate('ReplyModal');
            }}
          >
            <Feather name="message-circle" size={17} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacityArea}
            onPress={() => {
              Alert.alert('ReTweet.');
            }}
          >
            <AntDesign name="retweet" size={17} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacityArea}
            onPress={() => {
              Alert.alert('Thumbs up.');
            }}
          >
            <Feather name="heart" size={17} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacityArea}
            onPress={() => {
              Alert.alert('Share.');
            }}
          >
            <Feather name="share" size={17} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tweetItem: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
  },
  tweetItemLeft: {},
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  tweetItemRight: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  tweetHeader: {
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  tweetUsername: {
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight: '800',
  },
  tweetUserId: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '600',
  },
  tweetPostedAt: {
    marginHorizontal: 5,
    color: 'gray',
    fontSize: 16,
    fontWeight: '500',
  },
  tweetMessage: {
    // ackgroundColor: 'green',
    fontSize: 16,
    lineHeight: 18,
    padding: 5,
    fontWeight: '500',
  },
  tweetActivities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    paddingHorizontal: 25,
  },
  touchableOpacityArea: {
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
});
