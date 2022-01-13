import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';

const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={MainTabScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;