// import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './stacks';
import BookGenres from '../pages/genres/BookGenres';
import BookCart from '../pages/cart/BookCart';
import PortalDialog from '../components/dialog/PortalDialog';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name='Genre' component={BookGenres} />
        <Stack.Screen name='Cart' component={BookCart} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
        <Stack.Screen name='Dialog' component={PortalDialog} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppNavigation;

// const styles = StyleSheet.create({});