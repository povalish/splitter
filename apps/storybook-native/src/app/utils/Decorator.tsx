import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

//
//

export const Decorator: React.FC<PropsWithChildren> = ({ children }) => (
  <View className='w-screen h-screen bg-colorBackground flex justify-center items-center'>
    {children}
  </View>
);
