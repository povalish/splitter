/* eslint-disable import/namespace */
import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { INativeInput } from './Input.interface';
import { container, input, label as labelCx } from './Input.classes';

//
//

export const Input: React.FC<INativeInput> = ({ label, className, value, ...inputProps }) => (
  <View className={container({ className })}>
    <Text className={labelCx({ active: !!value })}>{label}</Text>
    <TextInput className={input()} value={value} {...inputProps} data-testid='native-input' />
  </View>
);
