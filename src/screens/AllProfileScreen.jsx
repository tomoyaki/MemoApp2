import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import SearchBox from '../components/SearchBox';
import ProfileList from '../components/ProfileList';

export default function AllProfileScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <SearchBox />
      <ProfileList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
