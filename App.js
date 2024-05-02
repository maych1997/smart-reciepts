import React from 'react';
import {Text} from 'react-native';
import Splash from './Stack/screens/screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewExpense from './Stack/screens/NewExpense';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      {/* <Text style={{color: '#000'}}>heloooo</Text> */}
      {/* <Splash></Splash> */}
      {/* <NewExpense></NewExpense> */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
          <Stack.Screen name="NewExpense" component={NewExpense}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
