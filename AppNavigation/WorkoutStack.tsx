import {createStackNavigator} from '@react-navigation/stack';
import WorkoutsScreen from '../Screens/WorkoutScreen';
import PunchScreen from '../Screens/PunchScreen';
import KickScreen from '../Screens/KickScreen';

export type RootStackParamList = {
  Workout: undefined;
  Punch: undefined;
  Kick: undefined;
};
const Stack = createStackNavigator();

export default function WorkoutsStack() {
  return (
    <>
      <Stack.Screen name="Workout" component={WorkoutsScreen} />
      <Stack.Screen name="Punch" component={PunchScreen} />
      <Stack.Screen name="Kick" component={KickScreen} />
    </>
  );
}
