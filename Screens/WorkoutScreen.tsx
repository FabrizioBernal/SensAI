//@ts-nocheck
import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {RootStackParamList} from '../AppNavigation/WorkoutStack';
import WorkoutsStack from '../AppNavigation/WorkoutStack';
import {NavigationContainer} from '@react-navigation/native';
type WorkoutStackNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Workout'
>;

type Props = {
  navigation: WorkoutStackNavigationProp;
};

export default function WorkoutsScreen({navigation}: Props) {
  const [show, setShow] = useState(false);
  return (
    <View>
      {/* <Stack.Screen name ='Punch' component={WorkoutsStack}> */}
      <Pressable
        onPress={() => {
          navigation.navigate('punch');
        }}>
        <Text style={styles.punch}>Box Workout</Text>
      </Pressable>
      {/* </Stack.Screen> */}
      <Pressable
        onPress={() => {
          navigation.navigate('kick');
        }}>
        <Text style={styles.kick}>Kick Workout</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  punch: {
    fontSize: 50,
    display: 'flex',
    width: 380,
    height: 180,
    paddingVertical: 13,
    paddingHorizontal: 12,
    justifyContent: 'center',
    gap: 10,
    flexShrink: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#AFB1B6',
    alignSelf: 'center',
    marginVertical: 150,
    textAlignVertical: 'center',
  },
  kick: {
    fontSize: 50,
    display: 'flex',
    width: 380,
    height: 180,
    paddingVertical: 13,
    paddingHorizontal: 12,
    justifyContent: 'center',
    gap: 10,
    flexShrink: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#AFB1B6',
    alignSelf: 'center',
  },
});
