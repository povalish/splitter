import React from 'react';
import { View } from 'react-native';

import { screen } from './Screen.classes';
import { INativeScreen } from './Screen.interface';

//
//

export const Screen: React.FC<INativeScreen> = ({ className, children }) => (
  <View className={screen({ className })}>{children}</View>
);
