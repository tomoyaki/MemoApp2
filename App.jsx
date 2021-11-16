import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TimelineScreen from './src/screens/TimelineScreen';
import TweetDetailScreen from './src/screens/TweetDetailScreen';
import TweetModalScreen from './src/screens/TweetModalScreen';
import AllProfileScreen from './src/screens/AllProfileScreen';
import ReplyModalScreen from './src/screens/ReplyModalScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LogInScreen from './src/screens/LogInScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'whoo-whoo',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
        }}
      >
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="Timeline" component={TimelineScreen} />
        <Stack.Screen name="TweetDetail" component={TweetDetailScreen} />
        <Stack.Screen name="TweetModal" component={TweetModalScreen} />
        <Stack.Screen name="AllProfile" component={AllProfileScreen} />
        <Stack.Screen name="ReplyModal" component={ReplyModalScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
