// import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './stacks';
import DialogContainer from '../containers/dialog/DialogContainer';
import {useCacheAsset} from '../hooks/useCacheAssets';
import {ActivityIndicator, Colors} from 'react-native-paper';
import GenresPage from '../pages/genres/GenresPage';
import {fontFamily} from '../assets/assets';
import AppLoadingContainer from '../containers/appLoading/AppLoadingContainer';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const loaded = useCacheAsset();

  return loaded ?(
    <Stack.Navigator initialRouteName='Genre'>
      <Stack.Group screenOptions={{
        headerTitleStyle: {fontFamily: fontFamily.bold}}}>
        <Stack.Screen options={
          {headerTitle: 'Select Genres'}
        } name='Genre' component={GenresPage} />
      </Stack.Group>
      <Stack.Group screenOptions={{
        presentation: 'transparentModal',
        headerShown: false,
      }}>
        <Stack.Screen name='Dialog' component={DialogContainer} />
        <Stack.Screen name='AppLoading' component={AppLoadingContainer} />
      </Stack.Group>
    </Stack.Navigator>
  ): <ActivityIndicator animating={true} color={Colors.transparent} />;
};

export default AppNavigation;

// const styles = StyleSheet.create({});
