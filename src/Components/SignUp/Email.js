import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, CheckBox, Input} from 'react-native-elements';
import Container from '../Container';
import {DEFAULT} from '../../Config/theme';
import {validateEmail} from '../../utils';

const Email = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const goToPassword = () => {
    if (email !== '' && validateEmail(email)) navigation.navigate('Password');
    else setError(true);
  };

  return (
    <Container>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Enter Your Email Address</Text>
        {error ? (
          <Text style={styles.error}>Please enter a valid email</Text>
        ) : null}
        <Input
          autoFocus
          label="Email Address"
          labelStyle={styles.labelStyle}
          inputStyle={styles.inputStyle}
          value={email}
          onChangeText={value => {
            setEmail(value);
            if (error) setError(false);
          }}
        />
        <Button
          title="Next"
          containerStyle={{width: '100%'}}
          onPress={goToPassword}
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
    marginBottom: 20,
  },
  innerContainer: {
    flex: 1,
    width: 300,
    paddingTop: 45,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  labelStyle: {fontSize: 12, fontWeight: 'normal', color: DEFAULT},
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: DEFAULT,
  },
});

export default Email;
