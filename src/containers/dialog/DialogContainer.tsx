// import {StyleSheet} from 'react-native';
import React from 'react';
import PortalDialog from '../../components/dialog/PortalDialog';
import {RootScreenStackProps} from '../../navigations/stacks';

type Props = RootScreenStackProps<'Dialog'>
const DialogContainer = ({route, navigation}: Props) => {
  const onHide = () => {
    navigation.goBack();
    route.params.callback && route.params.callback(route.params?.extra);
    route.params.secondaryCallback &&
    route.params.secondaryCallback(route.params?.extra);
  };
  return (
    <PortalDialog title={route.params.title}
      description={route.params.description}
      secondaryActionText={route.params?.secondaryActionText}
      actionText={route.params?.actionText}
      show={true}
      onHide={onHide}
    />
  );
};

export default DialogContainer;

// const styles = StyleSheet.create({})
