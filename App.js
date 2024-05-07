import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import Splash from './Stack/screens/screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewExpense from './Stack/screens/NewExpense';
import GetStarted from './Stack/screens/GetStarted';
import Header from './Stack/screens/Header';

const App = () => {
  const Stack = createNativeStackNavigator();

  const handleSearchPress = () => {
    console.log('Search icon pressed');
    // Add your search logic here
  };

  const handleMenuPress = () => {
    console.log('Menu icon pressed');
    // Add your menu logic here
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
          <Stack.Screen
            name="NewExpense"
            component={NewExpense}
            options={{
              header: ({navigation}) => (
                <Header
                  title="New Expense"
                  onSearchPress={handleSearchPress}
                  onMenuPress={() => navigation.openDrawer()}
                />
              ),
            }}></Stack.Screen>
          <Stack.Screen name="GetStarted" component={GetStarted}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
