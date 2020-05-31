import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Container from '../Container';
import {DEFAULT} from '../../Config/theme';

const Password = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);

  const signUp = () => {
    if (password !== '') alert('password valid');
    else setError(true);
  };

  return (
    <Container>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Enter a password</Text>
        {error ? (
          <Text style={styles.error}>
            Please enter a password to protect your account
          </Text>
        ) : null}
        <Input
          placeholder="Password"
          label="Password"
          labelStyle={styles.labelDeafult}
          inputStyle={styles.inputStyle}
          value={password}
          onChangeText={setPassword}
        />
        <Input
          placeholder="Confirm Password"
          label="Confirm Password"
          labelStyle={styles.labelDeafult}
          inputStyle={styles.inputStyle}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Button
          title="Sign Up"
          containerStyle={{width: '100%'}}
          onPress={signUp}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 18,
  },
  error: {
    color: 'red',
  },
  innerContainer: {
    flex: 1,
    width: 300,
    paddingTop: 45,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  inputContainerStyle: {
    width: 50,
    borderWidth: 2,
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: DEFAULT,
  },
  labelDeafult: {fontSize: 12, fontWeight: 'normal', color: DEFAULT},
});

export default Password;
