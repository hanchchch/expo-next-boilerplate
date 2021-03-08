import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  text?: string;
  style?: {};
}

export default function Button(props: ButtonProps) {
  const { text="", style={} } = props;
  return (
    <TouchableOpacity style={style}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
