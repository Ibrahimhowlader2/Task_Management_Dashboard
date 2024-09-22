import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoadingScreen from '../views/screens/AppLoadingScreen';
import AppStack from './AppStack';


const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {

  return(
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      Options={{}}
      initialRouteName="AppStack">
      <RootStack.Screen name='AuthLoading' component={AppLoadingScreen} />
      <RootStack.Screen name="AppStack" component={AppStack} />
    </RootStack.Navigator>
  );
}


export default RootStackScreen;
