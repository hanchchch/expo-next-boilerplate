// @generated: @expo/next-adapter@2.1.61
import React from 'react';
import styles from './styles';
import { Text, SafeAreaView } from 'react-native';
import Button from '@comp/common/atoms/Button';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <Button text={"Learn more"} onPress={() => navigation.push("learn")}/>
    </SafeAreaView>
  );
}
