import {StyleSheet} from 'react-native';
import React from 'react';
import AppLoading from '../../components/appLoading.tsx/AppLoading';
import {useAppSelector} from '../../redux/hooks/useSelector';

const AppLoadingContainer = () => {
  const loading = useAppSelector('appLoading');
  return (
    <AppLoading show={loading.toggle} message={loading.message} />
  );
};

export default AppLoadingContainer;
const styles = StyleSheet.create({});
