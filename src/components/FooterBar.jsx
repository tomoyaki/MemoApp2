import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function FooterBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => {
            navigation.navigate('Timeline');
          }}
        >
          <Feather name="clock" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => {
            navigation.navigate('Timeline');
          }}
        >
          <Feather name="bell" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => {
            navigation.navigate('AllProfile');
          }}
        >
          <Feather name="book" size={24} color="white" />
        </TouchableOpacity>
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
    paddingHorizontal: 50,
  },
  footerIcon: {
    paddingVertical: 8,
    paddingHorizontal: 30,
  },
});
