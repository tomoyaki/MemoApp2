import React from 'react';
import { View, StyleSheet } from 'react-native';

import TweetSubmitHeader from '../components/TweetSubmitHeader';
import TweetSubmit from '../components/TweetSubmit';
import Tweet from '../components/Tweet';

export default function ReplyModalScreen() {
  return (
    <View style={styles.container}>
      <TweetSubmitHeader />
      <Tweet />
      <TweetSubmit />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
