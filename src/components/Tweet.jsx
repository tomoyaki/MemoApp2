import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

export default function Tweet() {
  return (
    <ScrollView>
      {/* Tweet1 */}
      <View style={styles.tweetItem}>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
          <View style={styles.tweetActivities}>
            <Feather name="message-circle" size={17} color="gray" />
            <AntDesign name="retweet" size={17} color="gray" />
            <Feather name="heart" size={17} color="gray" />
            <Feather name="share" size={17} color="gray" />
          </View>
        </View>
      </View>
      {/* Tweet2 */}
      <View style={styles.tweetItem}>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
          <View style={styles.tweetActivities}>
            <Feather name="message-circle" size={17} color="gray" />
            <AntDesign name="retweet" size={17} color="gray" />
            <Feather name="heart" size={17} color="gray" />
            <Feather name="share" size={17} color="gray" />
          </View>
        </View>
      </View>
      {/* Tweet3 */}
      <View style={styles.tweetItem}>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
          <View style={styles.tweetActivities}>
            <Feather name="message-circle" size={17} color="gray" />
            <AntDesign name="retweet" size={17} color="gray" />
            <Feather name="heart" size={17} color="gray" />
            <Feather name="share" size={17} color="gray" />
          </View>
        </View>
      </View>
      {/* Tweet4 */}
      <View style={styles.tweetItem}>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
          <View style={styles.tweetActivities}>
            <Feather name="message-circle" size={17} color="gray" />
            <AntDesign name="retweet" size={17} color="gray" />
            <Feather name="heart" size={17} color="gray" />
            <Feather name="share" size={17} color="gray" />
          </View>
        </View>
      </View>
      {/* Tweet5 */}
      <View style={styles.tweetItem}>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
          <View style={styles.tweetActivities}>
            <Feather name="message-circle" size={17} color="gray" />
            <AntDesign name="retweet" size={17} color="gray" />
            <Feather name="heart" size={17} color="gray" />
            <Feather name="share" size={17} color="gray" />
          </View>
        </View>
      </View>
      {/* Tweet6 */}
      <View style={styles.tweetItem}>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
          <View style={styles.tweetActivities}>
            <Feather name="message-circle" size={17} color="gray" />
            <AntDesign name="retweet" size={17} color="gray" />
            <Feather name="heart" size={17} color="gray" />
            <Feather name="share" size={17} color="gray" />
          </View>
        </View>
      </View>
      {/* Tweet7 */}
      <View style={styles.tweetItem}>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
          <View style={styles.tweetActivities}>
            <Feather name="message-circle" size={17} color="gray" />
            <AntDesign name="retweet" size={17} color="gray" />
            <Feather name="heart" size={17} color="gray" />
            <Feather name="share" size={17} color="gray" />
          </View>
        </View>
      </View>
      {/* Tweet8 */}
      <View style={styles.tweetItem}>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
          <View style={styles.tweetActivities}>
            <Feather name="message-circle" size={17} color="gray" />
            <AntDesign name="retweet" size={17} color="gray" />
            <Feather name="heart" size={17} color="gray" />
            <Feather name="share" size={17} color="gray" />
          </View>
        </View>
      </View>
      {/* Tweet9 */}
      <View style={styles.tweetItem}>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
          <View style={styles.tweetActivities}>
            <Feather name="message-circle" size={17} color="gray" />
            <AntDesign name="retweet" size={17} color="gray" />
            <Feather name="heart" size={17} color="gray" />
            <Feather name="share" size={17} color="gray" />
          </View>
        </View>
      </View>
      {/* Tweet10 */}
      <View style={styles.tweetItem}>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
          <View style={styles.tweetActivities}>
            <Feather name="message-circle" size={17} color="gray" />
            <AntDesign name="retweet" size={17} color="gray" />
            <Feather name="heart" size={17} color="gray" />
            <Feather name="share" size={17} color="gray" />
          </View>
        </View>
      </View>
    </ScrollView>
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
  tweetItemLeft: {
    // backgroundColor: 'red',
  },
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
});
