import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import Profile from '../components/Profile';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <ScrollView>
        <Profile />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
