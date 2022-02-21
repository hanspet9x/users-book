// import {StyleSheet} from 'react-native';
import React from 'react';
import {Button, Dialog, Paragraph, Portal, Title} from 'react-native-paper';

interface Props {
  title: string;
  description: string;
  show: boolean;
  onHide():void;
  actionText?: string;
}
const PortalDialog = (props: Props) => {
  return (
    <Portal>
      <Dialog visible={props.show}>
        <Dialog.Content>
          <Title>{props.title}</Title>
          <Paragraph>{props.description}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={props.onHide}>{props.actionText ?? 'OK'}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default PortalDialog;

// const styles = StyleSheet.create({});
