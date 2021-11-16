import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>whoo-whooにログイン</Text>
        <TextInput style={styles.input} value="メールアドレス" />
        <TextInput style={styles.input} value="パスワード" />
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonLabel}>ログイン</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>パスワードを忘れた方は</Text>
          <Text style={styles.footerLink}>こちら</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 18,
    color: 'gray',
  },
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#ffffff',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
  footer: {
    flexDirection: 'row',
  },
});
