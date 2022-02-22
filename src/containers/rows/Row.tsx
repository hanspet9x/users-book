import {StyleSheet, View, ViewProps} from 'react-native';
import React from 'react';
import {FC} from 'react';

interface Props extends ViewProps {

}
const Row: FC<Props> = (props) => {
  return (
    <View style={[props.style, styles.container]}>
      {props.children}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
