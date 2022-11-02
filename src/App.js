import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormResponden from './pages/FormResponden';
import FormKuisioner from './pages/FormKuisioner';
import SuccesPage from './pages/SuccesPage';
import ListResponden from './pages/ListResponden';
import DetailResponden from './pages/DetailResponden';
import WelcomePage from './pages/WelcomePage';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const Stack = createStackNavigator();
export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="WelcomePage"
            component={WelcomePage}
          />
          <Stack.Screen
            name="ListResponden"
            component={ListResponden}
          />
          <Stack.Screen
            name="FormResponden"
            component={FormResponden}
          />

          <Stack.Screen
            name="DetailResponden"
            component={DetailResponden}
          />


          <Stack.Screen
            name="SuccesPage"
            component={SuccesPage}
          />

          <Stack.Screen
            name="FormKuisioner"
            component={FormKuisioner}
          />


        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  )
}

const styles = StyleSheet.create({})