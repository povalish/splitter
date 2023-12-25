import { Text, TouchableOpacity } from 'react-native';
import { INativeButton } from './Button.interface';
import { textClasses, buttonClasses } from './Button.classes';

//
//

export const Button: React.FC<INativeButton> = ({
  children,
  className,
  variant = 'success',
  ...buttonProps
}) => (
  <TouchableOpacity
    {...buttonProps}
    className={buttonClasses({ className, variant })}
    activeOpacity={1}
  >
    <Text className={textClasses({ variant })}>{children}</Text>
  </TouchableOpacity>
);
