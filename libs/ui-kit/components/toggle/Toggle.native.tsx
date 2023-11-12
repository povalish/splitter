import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { INativeToggle } from './Toggle.interface';
import {
  container,
  title,
  toggleArea,
  toggleThumb,
  checkedTip,
  uncheckedTip,
} from './Toggle.classes';

//
//

export const Toggle: React.FC<INativeToggle> = ({ label, className, value, onChange }) => {
  const [checked, setChecked] = useState(value);

  const press = () => {
    setChecked(!checked);
    onChange?.(!checked);
  };

  return (
    <View className={container({ className })}>
      <Text className={title()}>{label}</Text>
      <TouchableOpacity className={toggleArea()} onPress={press} data-testid='native-toggle'>
        <Text className={checkedTip({ checked })}>On</Text>
        <View className={toggleThumb({ checked })} />
        <Text className={uncheckedTip({ checked })}>Off</Text>
      </TouchableOpacity>
    </View>
  );
};
