import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TimelineScreen from './src/screens/TimelineScreen';
import TweetDetailScreen from './src/screens/TweetDetailScreen';
import TweetModal from './src/screens/TweetModalScreen';
import AllProfileScreen from './src/screens/AllProfileScreen';
import ReplyModalScreen from './src/screens/ReplyModalScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TimelineScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
