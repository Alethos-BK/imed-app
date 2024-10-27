import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Symptoms } from '../screens/Symptoms';
import { Check } from '../screens/Check';
import { Profile } from '../screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { Search } from '../screens/Search';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>

      <Tab.Screen
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          headerShown: false
        }}
        name="MyStack"
        component={MyStack}
      />

      <Tab.Screen
        options={{
          title: "Sintomas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alert-circle-outline" color={color} size={size} />
          ),
          headerShown: false
        }}
        name="Sintomas"
        component={Symptoms}
      />

      <Tab.Screen
        options={{
          title: "Consultas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="medkit-outline" color={color} size={size} />
          ),
          headerShown: false
        }}
        name="Check"
        component={Check}
      />

      <Tab.Screen
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
          headerShown: false
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>


  );
}

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={Search} options={{ headerTitle: "Busca" }} />
    </Stack.Navigator>
  );
}