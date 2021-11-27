import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TweetSubmitHeader() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Timeline');
          }}
        >
          <Text style={styles.cancelButton}>キャンセル</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Timeline');
          }}
        >
          <Text style={styles.submitButton}>投稿する</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  cancelButton: {
    color: '#467FD3',
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 32,
  },
  submitButton: {
    color: 'white',
    fontWeight: '500',
    backgroundColor: '#4B6251',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4B6251',
    overflow: 'hidden',
  },
});
