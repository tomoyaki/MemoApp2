import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

import AppBar from '../components/AppBar';

export default function AllProfileScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.searchContainer}>
        <TextInput placeholder="検索" style={styles.searchText} />
      </View>
      <View style={styles.profileArea}>
        <Image
          style={styles.userImage}
          source={require('../../assets//userImage.jpeg')}
        />
        <Text style={styles.Username}>苗字 名前</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  searchContainer: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 13,
    backgroundColor: '#F0EFEF',
    height: 31,
    width: 352,
    borderRadius: 50,
  },
  searchText: {
    paddingLeft: 10,
    fontSize: 20,
  },
  profileArea: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  Username: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});
