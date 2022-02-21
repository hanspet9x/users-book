// import {StyleSheet} from 'react-native';
import React from 'react';
import PortalDialog from '../../components/dialog/PortalDialog';
import {useNavigation} from '@react-navigation/native';

export interface IDialogProps {
    title: string;
    description: string;
    show: boolean;
}
const DialogContainer = (props: IDialogProps) => {
  const navigation = useNavigation();
  return (
    <PortalDialog title={props.title}
      description={props.description}
      show={props.show}
      onHide={()=>navigation.goBack()}
    />
  );
};

export default DialogContainer;

// const styles = StyleSheet.create({})
