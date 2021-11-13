import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import ProfileHeader from '../components/ProfileHeader';
import TweetDetail from '../components/TweetDetail';

export default function TweetDetailScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ProfileHeader />
        <TweetDetail />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
