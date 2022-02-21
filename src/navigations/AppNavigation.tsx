// import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './stacks';
import BookGenres from '../pages/genres/BookGenres';
import BookCart from '../pages/cart/BookCart';
import DialogContainer from '../containers/dialog/DialogContainer';
import {useCacheAsset} from '../hooks/useCacheAssets';
import {ActivityIndicator, Colors} from 'react-native-paper';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const loaded = useCacheAsset();

  return loaded ?(
    <Stack.Navigator initialRouteName='Genre'>
      <Stack.Group>
        <Stack.Screen name='Genre' component={BookGenres} />
        <Stack.Screen name='Cart' component={BookCart} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
        <Stack.Screen name='Dialog' component={DialogContainer} />
      </Stack.Group>
    </Stack.Navigator>
  ): <ActivityIndicator animating={true} color={Colors.transparent} />;
};

export default AppNavigation;

// const styles = StyleSheet.create({});
