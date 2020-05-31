import React, {useState, useEffect} from 'react';
import usePrevious from '../../Hooks/usePrevious';
import {Text, View, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Container from '../Container';
import {DEFAULT} from '../../Config/theme';

const Name = ({navigation}) => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(false);

  const goToBirthday = () => {
    if (name === '' || lastName === '') {
      return setError(true);
    }
    navigation.navigate('Birthday');
  };

  useEffect(() => {
    setError(false);
  }, [name, lastName]);

  return (
    <Container>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What's your name?</Text>
        {error ? (
          <Text style={styles.error}>
            Please enter your first and last name
          </Text>
        ) : null}
        <View style={styles.inputWrapper}>
          <Input
            placeholder="First Name"
            label="First Name"
            containerStyle={{flex: 1}}
            labelStyle={{
              ...styles.labelDeafult,
              color:
                !isNameFocused && name === ''
                  ? 'transparent'
                  : !isNameFocused && name !== ''
                  ? 'grey'
                  : DEFAULT,
            }}
            inputStyle={isNameFocused ? styles.inputStyle : null}
            value={name}
            onChangeText={setName}
            onFocus={() => setIsNameFocused(true)}
            onBlur={() => setIsNameFocused(false)}
          />
          <Input
            placeholder="Last Name"
            label="Last Name"
            containerStyle={{flex: 1}}
            labelStyle={{
              ...styles.labelDeafult,
              color:
                !isLastNameFocused && lastName === ''
                  ? 'transparent'
                  : !isLastNameFocused && lastName !== ''
                  ? 'grey'
                  : DEFAULT,
            }}
            inputStyle={isLastNameFocused ? styles.inputStyle : null}
            value={lastName}
            onChangeText={setLastName}
            onFocus={() => setIsLastNameFocused(true)}
            onBlur={() => setIsLastNameFocused(false)}
          />
        </View>
        <Button
          title="Next"
          containerStyle={{width: '100%'}}
          onPress={goToBirthday}
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
  labelDeafult: {fontSize: 12, fontWeight: 'normal'},
});

export default Name;
