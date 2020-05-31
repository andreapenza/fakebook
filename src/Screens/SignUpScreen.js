import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {DEFAULT} from '../Config/theme';
import Container from '../Components/Container';

const SignUpScreen = ({navigation}) => {
  return (
    <Container>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>SVG IMAGE</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={styles.joinFbWrapper}>
          <Text style={styles.title}>Join Facebook</Text>
          <Text style={styles.subTitle}>
            We help you create a new account in a few easy steps
          </Text>
          <Button
            title="Next"
            buttonStyle={{backgroundColor: DEFAULT}}
            onPress={() => navigation.navigate('Name')}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text
          style={styles.linkStyle}
          onPress={() => navigation.navigate('SignIn')}>
          Already have an account?
        </Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  joinFbWrapper: {
    width: 300,
    height: '100%',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  subTitle: {
    textAlign: 'center',
    color: 'grey',
  },
  linkStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: DEFAULT,
    marginBottom: 10,
  },
});

export default SignUpScreen;
