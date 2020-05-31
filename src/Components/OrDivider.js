import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OrDivider = () => {
  return (
    <View style={styles.dividerWrapper}>
      <View style={styles.line} />
      <Text style={styles.text}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  dividerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:25
  },
  line: {
    flex: 2,
    height: 1,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
  },
});

export default OrDivider;
