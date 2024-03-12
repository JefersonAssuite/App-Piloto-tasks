import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Task from './src/Pages/Task';
import NewTask from './src/Pages/NewTask';
import Details from './src/Pages/Details';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Task">
          <Stack.Screen name="Task" component={Task} options={{headerTintColor:"#1E90FF"}}/>
          <Stack.Screen name="Details" component={Details} options ={{headerTintColor:"#1E90FF"}}/>
          <Stack.Screen name="NewTask" component={NewTask} options={{headerTintColor:"#1E90FF"}}/>

        </Stack.Navigator>
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
