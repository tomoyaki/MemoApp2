import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>motiβs</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>
      {/* Contents */}
      <View style={styles.xxx}>
        <View>
          <View>
            <Text>tweet1</Text>
            <Text>2020/12/24 10:00</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
          <View>
            <Text>tweet2</Text>
            <Text>2020/12/24 10:00</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
          <View>
            <Text>tweet3</Text>
            <Text>2020/12/24 10:00</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>
      </View>
      {/* CircleButton */}
      <View style={styles.yyy}>
        <Text>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
