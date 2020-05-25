import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DEFAULT} from '../Config/theme';

const FacebookLogo = () => (
  <View style={styles.facebookIconBg}>
    <Icon name="facebook" size={40} color="white" style={styles.facebookIcon} />
  </View>
);

const styles = StyleSheet.create({
  facebookIconBg: {
    width: 45,
    height: 45,
    position: 'relative',
    backgroundColor: DEFAULT,
    alignItems: 'center',
    borderRadius: 30,
  },
  facebookIcon: {
    position: 'absolute',
    bottom: -5,
  },
});

export default FacebookLogo;
