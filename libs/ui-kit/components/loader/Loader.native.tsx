import { Text, View } from 'react-native';
import { ILoader } from './Loader.interface';

//
//

export const Loader: React.FC<ILoader> = () => (
  <View className='px-2 py-4 flex items-center'>
    <Text>Loading...</Text>
  </View>
);
