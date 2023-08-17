import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Loader } from '@ui-kit/components/loader/Loader.native';
import { Button } from '@ui-kit/components/button/Button.native';

//
//

export const App = () => (
  <>
    <StatusBar barStyle='dark-content' />
    <SafeAreaView>
      <Text testID='heading' className='text-2xl text-emerald-300'>
        Hello from ReactNative
      </Text>
      <View className='w-12 h-12 rounded-full bg-slate-300' />
      <Loader />
      <Button>Click me!</Button>
    </SafeAreaView>
  </>
);

export default App;
