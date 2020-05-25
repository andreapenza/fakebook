import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from "react-native-elements"

const SignUpScreen = () => {
  return (
    <View>
      <View style={{flex: 1}} />
      <View style={{flex: 1}} />
      <View style={{flex: 1, }}>
        <Button title="Already have an account?"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
