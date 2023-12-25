import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { screen } from './Screen.classes';
import { INativeScreen } from './Screen.interface';

//
//

export const Screen: React.FC<INativeScreen> = ({ className, children }) => (
  <SafeAreaView className={screen({ className })}>{children}</SafeAreaView>
);
