import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  text?: string;
  onPress?: () => {};
  style?: {};
}

export default function Button(props: ButtonProps) {
  const { text="", onPress, style={} } = props;

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  }
  
  return (
    <TouchableOpacity style={style} onPress={handlePress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
