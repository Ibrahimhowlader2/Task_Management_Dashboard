import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './BottomNavigator';
const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          // borderBottomRightRadius: Sizes.borderRadius, borderBottomLeftRadius: Sizes.borderRadius,
          shadowColor: '#000',
          shadowOffset: {
            width: 20,
            height: 20,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={BottomNavigator}
        options={{title: 'BottomNavigator'}}
      />
      {/* =============Task============= */}
      {/* <Stack.Screen
        name="AllTaskScreen"
        component={AllTaskScreen}
        options={{title: 'All Task'}}
      /> */}
    
    </Stack.Navigator>
  );
}
