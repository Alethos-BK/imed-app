import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Classificate } from '../screens/Classificate';
import { Check } from '../screens/Check';
import { Profile } from '../screens/Profile';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Classificate" component={Classificate} />
      <Tab.Screen name="Check" component={Check} />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  );
}