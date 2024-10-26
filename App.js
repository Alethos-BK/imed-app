import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { MyTabs } from './src/services/TabNavigation';

export default function App() {
  return (
    <NavigationContainer>
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
