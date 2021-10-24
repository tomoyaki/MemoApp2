import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

export default function TweetDetail() {
  return (
    <View>
      <View style={styles.tweetDetailContent}>
        <Text style={styles.tweetDetailContentText}>
          何も次第ちょうどその推察院とかいうののためで評しましです。できるだけ事実が参考通りははなはだそうした出立ううばかりに待っているべからをも標榜しならますて、そうにはなれななくたらた。
        </Text>
      </View>

      <View style={styles.tweetDetailPostedAt}>
        <Text style={styles.tweetDetailPostedAtText}>11:45 2021/10/23</Text>
      </View>

      <View style={styles.tweetDetailNotification}>
        <Text style={styles.tweetDetailNotificationText}>
          <Text style={styles.tweetDetailNotificationNumber}>1</Text>
          件のいいね
        </Text>
      </View>

      <View style={styles.tweetDetailActivityIcons}>
        <Feather name="message-circle" size={24} color="gray" />
        <AntDesign name="retweet" size={24} color="gray" />
        <Feather name="heart" size={24} color="gray" />
        <Feather name="share" size={24} color="gray" />
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
