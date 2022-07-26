import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealDetailScreen from './screens/MealDetaiScreen';

import CategoriesScreen from './screens/CategoriesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Meals Categories'

          //Default screen settigs (apply to every screen)
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',

            //Set the background color for the current screen
            contentStyle: { backgroundColor: '#3f2f25' }
          }}
        >
          <Stack.Screen 
            name="Meals Categories" 
            component={CategoriesScreen} 
            options={{
              title: 'Meals Categries',
            }}
          />
          <Stack.Screen 
            name="Meal Overview" 
            component={MealOverviewScreen}
          />
          <Stack.Screen
            name='Meal Detail'
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
