import React from 'react';
import { View, StyleSheet } from 'react-native';

import SearchBox from '../components/SearchBox';
import ProfileList from '../components/ProfileList';
import FooterBar from '../components/FooterBar';

export default function AllProfileScreen() {
  return (
    <View style={styles.container}>
      <SearchBox />
      <ProfileList />
      <FooterBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
