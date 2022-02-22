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
  const {roundness} = useTheme();
  const {colors} = useTheme();
  return (
    <Portal>
      <Modal visible={props.show} dismissable={false}
        contentContainerStyle={[styles.modal, {borderRadius: roundness}]} >
        <Paragraph
          style={styles.paragraph}>{props.message}</Paragraph>
        <ActivityIndicator color={colors.backdrop} />
      </Modal>
    </Portal>
  );
};

export default AppLoading;
const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 10,
  }
});
