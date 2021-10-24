import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileHeader() {
  return (
    <View style={styles.tweetDetailHeader}>
      <View style={styles.tweetDetailHeaderLeft}>
        <Image
          style={styles.userImage}
          source={require('../../assets//userImage.jpeg')}
        />
      </View>
      <View style={styles.tweetDetailHeaderRight}>
        <Text style={styles.tweetUsername}>tomoyaki</Text>
        <Text style={styles.tweetUserId}>@tomoyaki74</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    flex: 1,
  },
  tweetDetailHeader: {
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  tweetDetailHeaderLeft: {
    // backgroundColor: 'gray',
    height: 85,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  tweetDetailHeaderRight: {
    flex: 1,
    // backgroundColor: 'blue',
    height: 85,
    justifyContent: 'center',
    paddingLeft: 8,
  },
  tweetDetailContent: {
    // backgroundColor: 'green',
    justifyContent: 'flex-end',
    marginHorizontal: 15,
  },
  tweetDetailContentText: {
    fontSize: 25,
    lineHeight: 28,
  },
  tweetDetailPostedAt: {
    // backgroundColor: 'blue',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    marginHorizontal: 15,
    paddingVertical: 15,
  },
  tweetDetailPostedAtText: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  },
  tweetDetailNotification: {
    // backgroundColor: 'pink',
    marginHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  tweetDetailNotificationNumber: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
  },
  tweetDetailNotificationText: {
    fontSize: 17,
    color: 'gray',
    fontWeight: 'bold',
  },
  tweetDetailActivityIcons: {
    //backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 50,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  tweetUserId: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
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
