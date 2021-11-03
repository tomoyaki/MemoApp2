import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function FooterBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Feather name="clock" size={24} color="white" />
        <Feather name="bell" size={24} color="white" />
        <Feather name="book" size={24} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    bottom: 0,
    height: 47,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
  },
  appbarInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 75,
  },
});
