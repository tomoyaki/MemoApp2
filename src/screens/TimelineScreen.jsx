import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Tweet from '../components/Tweet';
import CircleButton from '../components/CircleButton';
import FooterBar from '../components/FooterBar';

export default function TimelineScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Tweet />
      </ScrollView>
      <CircleButton>+</CircleButton>
      <FooterBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
