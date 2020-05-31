import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Keyboard} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {DEFAULT} from '../Config/theme';
import OrDivider from './OrDivider';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginDisabled, setLoginDisabled] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [emailInputFocused, setEmailInputFocused] = useState(false);
  const [passwordInputFocused, setPasswordInputFocused] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidHide = () => {
    setIsInputFocused(false);
  };

  useEffect(() => {
    setLoginDisabled(email === '' || password === '' ? true : false);
  }, [email, password]);

  return (
    <>
      <View style={styles.svg} />
      <View style={styles.outerMain}>
        <View style={{...styles.innerMain, paddingTop:isInputFocused ? 20 : 65}}>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            containerStyle={styles.input}
            value={email}
            onChangeText={setEmail}
            inputStyle={emailInputFocused ? styles.inputFocus : null}
            onTouchStart={() => setIsInputFocused(true)}
            onFocus={() => setEmailInputFocused(true)}
            onBlur={() => setEmailInputFocused(false)}
          />
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="Password"
            containerStyle={styles.input}
            value={password}
            onChangeText={setPassword}
            inputStyle={passwordInputFocused ? styles.inputFocus : null}
            onTouchStart={() => setIsInputFocused(true)}
            onFocus={() => setPasswordInputFocused(true)}
            onBlur={() => setPasswordInputFocused(false)}
          />
          <Button
            title="Log In"
            disabled={loginDisabled}
            disabledStyle={{backgroundColor: DEFAULT}}
          />
          {!isInputFocused ? (
            <>
              <Text style={styles.linkStyle}>Forgot Password?</Text>
              <OrDivider />
            </>
          ) : null}
          <Button
            title="Create New Facebook Account"
            titleStyle={isInputFocused ? {color: DEFAULT} : null}
            buttonStyle={
              !isInputFocused ? styles.buttonStyle : styles.buttonStyleFocused
            }
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  svg: {
    flex: 1.4,
  },
  outerMain: {
    flex: 3.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerMain: {
    width: 300,
    justifyContent: 'space-between',
    paddingTop:65,
    paddingBottom: 40,
    height: '100%',
  },
  input: {
    height: 52,
  },
  inputFocus: {
    borderBottomColor: DEFAULT,
    borderBottomWidth: 1.5,
  },
  buttonStyle: {
    backgroundColor: 'green',
  },
  buttonStyleFocused: {
    backgroundColor: 'transparent',
  },
  linkStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: DEFAULT,
    textAlign: 'center',
  },
});

export default SignIn;
