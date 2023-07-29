import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../AppNavigation/WorkoutStack";


type WorkoutStackNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Punch'
>;

type Props = {
  navigation: WorkoutStackNavigationProp;
};

export default function PunchScreen() : JSX.Element{

  return (
    <View style={styles.container}>
      <RNCamera style={styles.camera} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
});