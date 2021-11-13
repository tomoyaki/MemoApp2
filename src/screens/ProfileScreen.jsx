import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Profile from '../components/Profile';
import FooterBar from '../components/FooterBar';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Profile />
      </ScrollView>
      <FooterBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
