import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { INativeTab } from './Tab.interface';
import { textClasses, tabClasses } from './Tab.classes';

//
//

export const Tab: React.FC<INativeTab> = ({ label, active, onSelect }) => (
  <TouchableOpacity onPress={onSelect} className={tabClasses({ active })}>
    <Text className={textClasses({ active })}>{label}</Text>
  </TouchableOpacity>
);
