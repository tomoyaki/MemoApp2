import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Tweet() {
  return (
    <View>
      {/* Tweet1 */}
      <View style={styles.tweetItem}>
        <View style={styles.tweetItemLeft}>
          <Image
            style={styles.userImage}
            source={require('../../assets//userImage.jpeg')}
          />
        </View>
        <View style={styles.tweetItemRight}>
          <View style={styles.tweetHeader}>
            <Text style={styles.tweetUsername}>tomoyaki</Text>
            <Text style={styles.tweetUserId}>@tomoyaki74</Text>
            <Text style={styles.tweetPostedAt}>15m</Text>
          </View>
          <Text style={styles.tweetMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
        </View>
      </View>
      {/* Tweet2 */}
      <View style={styles.tweetItem}>
        <View style={styles.tweetItemLeft}>
          <Image
            style={styles.userImage}
            source={require('../../assets//userImage.jpeg')}
          />
        </View>
        <View style={styles.tweetItemRight}>
          <View style={styles.tweetHeader}>
            <Text style={styles.tweetUsername}>tomoyaki</Text>
            <Text style={styles.tweetUserId}>@tomoyaki74</Text>
            <Text style={styles.tweetPostedAt}>15m</Text>
          </View>
          <Text style={styles.tweetMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
        </View>
      </View>
      {/* Tweet3 */}
      <View style={styles.tweetItem}>
        <View style={styles.tweetItemLeft}>
          <Image
            style={styles.userImage}
            source={require('../../assets//userImage.jpeg')}
          />
        </View>
        <View style={styles.tweetItemRight}>
          <View style={styles.tweetHeader}>
            <Text style={styles.tweetUsername}>tomoyaki</Text>
            <Text style={styles.tweetUserId}>@tomoyaki74</Text>
            <Text style={styles.tweetPostedAt}>15m</Text>
          </View>
          <Text style={styles.tweetMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
        </View>
      </View>
      {/* Tweet4 */}
      <View style={styles.tweetItem}>
        <View style={styles.tweetItemLeft}>
          <Image
            style={styles.userImage}
            source={require('../../assets//userImage.jpeg')}
          />
        </View>
        <View style={styles.tweetItemRight}>
          <View style={styles.tweetHeader}>
            <Text style={styles.tweetUsername}>tomoyaki</Text>
            <Text style={styles.tweetUserId}>@tomoyaki74</Text>
            <Text style={styles.tweetPostedAt}>15m</Text>
          </View>
          <Text style={styles.tweetMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
        </View>
      </View>
      {/* Tweet5 */}
      <View style={styles.tweetItem}>
        <View style={styles.tweetItemLeft}>
          <Image
            style={styles.userImage}
            source={require('../../assets//userImage.jpeg')}
          />
        </View>
        <View style={styles.tweetItemRight}>
          <View style={styles.tweetHeader}>
            <Text style={styles.tweetUsername}>tomoyaki</Text>
            <Text style={styles.tweetUserId}>@tomoyaki74</Text>
            <Text style={styles.tweetPostedAt}>15m</Text>
          </View>
          <Text style={styles.tweetMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
        </View>
      </View>
    </View>
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
    fontWeight: 'bold',
  },
  tweetUserId: {
    color: 'gray',
    fontSize: 16,
  },
  tweetPostedAt: {
    marginHorizontal: 5,
    color: 'gray',
    fontSize: 16,
  },
  tweetMessage: {
    // ackgroundColor: 'green',
    fontSize: 15,
    lineHeight: 18,
    padding: 5,
  },
});
