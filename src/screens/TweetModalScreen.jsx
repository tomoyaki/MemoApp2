import React from 'react';
import { View, StyleSheet } from 'react-native';

import TweetSubmit from '../components/TweetSubmit';

export default function TweetModalScreen() {
  return (
    <View style={styles.container}>
      <TweetSubmit />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
