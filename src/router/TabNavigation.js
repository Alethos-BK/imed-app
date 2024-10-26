import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Classificate } from '../screens/Classificate';
import { Check } from '../screens/Check';
import { Profile } from '../screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native'
import { ImageComponent } from '../components/ImageComponent';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#f0f0f0', // Cor do fundo do cabeçalho
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'transparent', // Remover sombra no iOS
    elevation: 0, // Remover sombra no Android
  },
  headerImage: {
    width: 80, // Largura da imagem
    height: 80, // Altura da imagem
    borderRadius: 40, // Torna a imagem redonda
  },
});

function CustomHeader({ imageSource }) {
  return (
    <View style={styles.headerContainer}>
      
    </View>
  );
}

function ScreenWithHeader({ component: Component, imageSource }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader imageSource={imageSource} />
      <Component />
    </View>
  );
}

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
        name="Home"
        component={() => <ScreenWithHeader component={Home} imageSource={require('../../assets/logo.png')} />}
      />

      <Tab.Screen
        options={{
          title: "Risco",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alert-circle-outline" color={color} size={size} />
          ),
          headerTitle: "Classificação de Risco",
          headerStyle: {
            backgroundColor: '#2198BA',
          },
          headerTintColor: '#ffffff',
        }}
        name="Classificate"
        component={Classificate}
      />

      <Tab.Screen
        options={{
          title: "Consultas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="medkit-outline" color={color} size={size} />
          ),
          headerTitle: "Minhas Consultas",
          headerStyle: {
            backgroundColor: '#2198BA',
          },
          headerTintColor: '#ffffff',
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
          headerTitle: "Meu Perfil",
          headerStyle: {
            backgroundColor: '#2198BA',
          },
          headerTintColor: '#ffffff',
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}