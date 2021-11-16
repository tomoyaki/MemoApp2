import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>アカウント登録</Text>
        <TextInput style={styles.input} value="メールアドレス" />
        <TextInput style={styles.input} value="パスワード" />
        <Button label="登録してはじめる" />
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
