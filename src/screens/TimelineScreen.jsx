import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Tweet from '../components/Tweet';
import CircleButton from '../components/CircleButton';
import FooterBar from '../components/FooterBar';
import LogOutButton from '../components/LogOutButton';

export default function TimelineScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Tweet />
      </ScrollView>
      <CircleButton
        name="plus"
        onPress={() => {
          navigation.navigate('TweetModal');
        }}
      />
      <FooterBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
