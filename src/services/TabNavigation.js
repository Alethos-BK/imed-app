import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Classificate } from '../screens/Classificate';
import { Check } from '../screens/Check';
import { Profile } from '../screens/Profile';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        title: "Home",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" color={color} size={size} />
        )
      }} name="Home" component={Home} />

      <Tab.Screen options={{
        title: "Classificação Risco",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="alert-circle-outline" color={color} size={size} />
        )
      }} name="Classificate" component={Classificate} />

      <Tab.Screen options={{
        title: "Consultas",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="medkit-outline" color={color} size={size} />
        )
      }} name="Check" component={Check} />

      <Tab.Screen options={{
        title: "Perfil",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-outline" color={color} size={size} />
        )
      }} name="Profile" component={Profile} />

    </Tab.Navigator>
  );
}