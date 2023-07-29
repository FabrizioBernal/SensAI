import Home from '../Screens/HomeScreen';
import Camera from '../Screens/UploadScreen';
import ProfileScreen from '../Screens/ProfileScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WorkoutScreen from '../Screens/WorkoutScreen';

const Tabs = createBottomTabNavigator();

export default function TabNaviagtion(): JSX.Element {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="Camera" component={Camera} options={{
        tabBarLabel: 'Camera',
        tabBarIcon: ({color}) => (
          <Icon name='camera' size={30} color={color}/>
        )
      }} />
      <Tabs.Screen name="WorkoutScreen" component={WorkoutScreen} options={{
        tabBarLabel: 'AI Training',
        tabBarIcon: ({color}) => (
          <Icon name='account_circle' size={30} color={color}/>
        )

      }}/>
      <Tabs.Screen name="Profile" component={ProfileScreen} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color}) => (
          <Icon name='account_circle' size={30} color={color}/>
        )

      }}/>

    </Tabs.Navigator>
  );
}
