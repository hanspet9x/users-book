// import {StyleSheet} from 'react-native';
import React from 'react';
import {Button, Dialog, Paragraph, Title} from 'react-native-paper';

interface Props {
  title: string;
  description: string;
  show: boolean;
  onHide(isSecondaryAction?: boolean):void;
  actionText?: string;
  secondaryActionText?: string;
}
const PortalDialog = (props: Props) => {
  return (
    // <Portal>
    <Dialog visible={props.show}>
      <Dialog.Content>
        <Title>{props.title}</Title>
        <Paragraph>{props.description}</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        {props.secondaryActionText &&
        <Button onPress={()=>props.onHide(true)}>
          {props.actionText ?? 'OK'}</Button>}
        <Button onPress={props.onHide}>{props.actionText ?? 'OK'}</Button>
      </Dialog.Actions>
    </Dialog>
    // </Portal>
  );
};

export default PortalDialog;

// const styles = StyleSheet.create({});
