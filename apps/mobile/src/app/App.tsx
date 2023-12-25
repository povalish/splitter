import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TimerScreen } from '../screens/TimerScreen';

//
//

export type RootStackParamList = {
  Timer: undefined;
  Settings: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

//
//

export const App = () => (
  <NavigationContainer>
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name='Timer' component={TimerScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
