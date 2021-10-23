import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>motiβs</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>
      {/* Tweets1 */}
      <View>
        <View style={styles.tweetItem}>
          <View style={styles.tweetItemLeft}>
            <Image
              style={styles.userImage}
              source={require('./assets/userImage.jpeg')}
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, ...
            </Text>
          </View>
        </View>
      </View>
      {/* Tweets2 */}
      <View>
        <View style={styles.tweetItem}>
          <View style={styles.tweetItemLeft}>
            <Image
              style={styles.userImage}
              source={require('./assets/userImage.jpeg')}
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, ...
            </Text>
          </View>
        </View>
      </View>
      {/* Tweets3 */}
      <View>
        <View style={styles.tweetItem}>
          <View style={styles.tweetItemLeft}>
            <Image
              style={styles.userImage}
              source={require('./assets/userImage.jpeg')}
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, ...
            </Text>
          </View>
        </View>
      </View>
      {/* Tweets4 */}
      <View>
        <View style={styles.tweetItem}>
          <View style={styles.tweetItemLeft}>
            <Image
              style={styles.userImage}
              source={require('./assets/userImage.jpeg')}
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, ...
            </Text>
          </View>
        </View>
      </View>
      {/* Tweets5 */}
      <View>
        <View style={styles.tweetItem}>
          <View style={styles.tweetItemLeft}>
            <Image
              style={styles.userImage}
              source={require('./assets/userImage.jpeg')}
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, ...
            </Text>
          </View>
        </View>
      </View>
      {/* CircleButton */}
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  appbar: {
    width: '100%',
    height: 70,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
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
  circleButton: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
