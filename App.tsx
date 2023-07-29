/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import WorkoutsScreen from './Screens/WorkoutScreen';
import PunchScreen from './Screens/PunchScreen';
import KickScreen from './Screens/KickScreen';
import {NavigationContainer} from '@react-navigation/native';
import TabNaviagtion from './AppNavigation/TabNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tab">
        <Stack.Screen
          name="Tab"
          component={TabNaviagtion}
          options={{headerShown: false}}
        />
        <Stack.Screen name="workout" component={WorkoutsScreen} />
        <Stack.Screen name="punch" component={PunchScreen} />
        <Stack.Screen name="kick" component={KickScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
