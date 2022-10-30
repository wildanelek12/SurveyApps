import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormResponden from './pages/FormResponden';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="FormResponden"
          component={FormResponden}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})