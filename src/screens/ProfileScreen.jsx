import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import Profile from '../components/Profile';
import FooterBar from '../components/FooterBar';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
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
