import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import Tweet from '../components/Tweet';
import CircleButton from '../components/CircleButton';

export default function TimelineScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <AppBar />
      {/* Content */}
      <ScrollView>
        <Tweet />
      </ScrollView>
      {/* CircleButton */}
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
