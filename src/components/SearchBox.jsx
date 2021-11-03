import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchBox() {
  return (
    <View style={styles.searchContainer}>
      <TextInput placeholder="検索" style={styles.searchText} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
