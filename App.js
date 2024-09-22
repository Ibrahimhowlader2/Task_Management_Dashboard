import {
  Appearance,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import store from './store';
import {Provider} from 'react-redux';
import RootStackScreen from './navigations/RootStack';

const App = () => {
  const navTheme = DefaultTheme;
  navTheme.colors.background = '#ffffff';
  console.log("App is running!");
  return (
    <>
      <Provider store={store}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
          <NavigationContainer theme={navTheme}>
            <RootStackScreen />
          </NavigationContainer>
          <FlashMessage position="bottom" />
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
