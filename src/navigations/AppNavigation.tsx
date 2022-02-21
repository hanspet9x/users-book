// import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './stacks';
import BookGenres from '../pages/genres/BookGenres';
import BookCart from '../pages/cart/BookCart';
import DialogContainer from '../containers/dialog/DialogContainer';
import {useCacheAsset} from '../hooks/useCacheAssets';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const loaded = useCacheAsset();

  return (
    <Stack.Navigator initialRouteName='Genre'>
      {!loaded ? <></> : (
      <>
        <Stack.Group>
          <Stack.Screen name='Genre' component={BookGenres} />
          <Stack.Screen name='Cart' component={BookCart} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
          <Stack.Screen name='Dialog' component={DialogContainer} />
        </Stack.Group>
      </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigation;

// const styles = StyleSheet.create({});