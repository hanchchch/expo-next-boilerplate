import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "@mobile/Home";
import Learn from "@mobile/Learn";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="home"
          component={Home}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
         name="learn"
         component={Learn}
         options={{
           title: 'Learn',
         }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}