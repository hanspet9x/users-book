import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Group>
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default AppNavigation

const styles = StyleSheet.create({})