import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet } from 'react-native';
import { MyTabs } from './src/router/TabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        translucent={true}
        style={"light"}
      />
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
