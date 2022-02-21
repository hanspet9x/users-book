// import {StyleSheet} from 'react-native';
import React from 'react';
import PortalDialog from '../../components/dialog/PortalDialog';
import {RootScreenStackProps} from '../../navigations/stacks';

type Props = RootScreenStackProps<'Dialog'>
const DialogContainer = ({route, navigation}: Props) => {
  return (
    <PortalDialog title={route.params.title}
      description={route.params.description}
      show={route.params.show}
      onHide={()=>navigation.goBack()}
    />
  );
};

export default DialogContainer;

// const styles = StyleSheet.create({})
