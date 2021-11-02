import React from 'react';
import { View, StyleSheet } from 'react-native';

import TweetSubmitHeader from '../components/TweetSubmitHeader';
import TweetSubmit from '../components/TweetSubmit';

export default function TweetModalScreen() {
  return (
    <View style={styles.container}>
      <TweetSubmitHeader />
      <TweetSubmit />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
