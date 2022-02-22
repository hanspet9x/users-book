import {StyleSheet} from 'react-native';
import React from 'react';
import {ActivityIndicator, Modal,
  Paragraph,
  Portal, useTheme} from 'react-native-paper';

  interface Props {
    message: string;
    show: boolean;
  }
const AppLoading = (props: Props) => {
  const {colors} = useTheme();
  return (
    <Portal>
      <Modal visible={props.show} dismissable={false} >
        <Paragraph>{props.message}</Paragraph>
        <ActivityIndicator color={colors.backdrop} />
      </Modal>
    </Portal>
  );
};

export default AppLoading;

const styles = StyleSheet.create({});
