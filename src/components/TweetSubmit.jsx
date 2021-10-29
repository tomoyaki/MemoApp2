import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function TweetSubmit() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.cancelButton}>キャンセル</Text>
        <Text style={styles.submitButton}>投稿する</Text>
      </View>
      <View style={styles.editArea}>
        <View style={styles.editAreaIcon}>
          <Image
            style={styles.userImage}
            source={require('../../assets//userImage.jpeg')}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="今何してるのー？"
            multiline
            allowFontScaling
            autoFocus
            style={styles.inputText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  editArea: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  editAreaIcon: {
    paddingLeft: 15,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  inputContainer: {
    flex: 1,
    padding: 5,
  },
  inputText: {
    paddingLeft: 5,
    fontSize: 20,
  },
});
