import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function TweetSubmitHeader() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.cancelButton}>キャンセル</Text>
        <Text style={styles.submitButton}>投稿する</Text>
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
    backgroundColor: '#467FD3',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#467FD3',
    overflow: 'hidden',
  },
});
