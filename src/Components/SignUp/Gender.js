import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, CheckBox, Input} from 'react-native-elements';
import Container from '../Container';
import {DEFAULT} from '../../Config/theme';
//import {Picker} from '@react-native-community/picker';

const genders = ['Female', 'Male', 'Custom'];

const Gender = ({navigation}) => {
  const [gender, setGender] = useState(null);
  const [customGender, setCustomGender] = useState(null);
  const [isCustomFocused, setIsCustomFocused] = useState(false);
  const [error, setError] = useState(false);

  const goToEmail = () => {
    if (gender !== null) navigation.navigate('Email');
    else setError(true);
  };

  return (
    <Container>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What's your gender?</Text>
        {error ? (
          <Text style={styles.error}>Please select your gender</Text>
        ) : (
          <Text style={styles.subTitle}>
            You can change who sees your gender on your profile later.
          </Text>
        )}
        {genders.map(genderValue => {
          return (
            <CheckBox
              key={genderValue}
              iconRight
              iconType="material-community"
              checked={gender === genderValue ? true : false}
              checkedIcon="circle-slice-8"
              uncheckedIcon="circle-outline"
              title={genderValue}
              containerStyle={styles.radioBtnContainer}
              textStyle={{width: '85%'}}
              onPress={() => {
                setGender(genderValue);
                if (error) setError(false);
              }}
            />
          );
        })}
        {gender === 'Custom' ? (
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Enter your gender (optional)"
            onChangeText={setCustomGender}
            value={customGender}
            containerStyle={{paddingHorizontal: 0, height: 48}}
            inputContainerStyle={{
              width: '100%',
              backgroundColor: isCustomFocused ? 'transparent' : 'lightgrey',
            }}
            onFocus={() => setIsCustomFocused(true)}
            onBlur={() => setIsCustomFocused(false)}
          />
        ) : null}

        <Button
          title="Next"
          containerStyle={{width: '100%', marginTop: 40}}
          onPress={goToEmail}
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
  subTitle: {
    textAlign: 'center',
    color: 'grey',
  },
  innerContainer: {
    flex: 1,
    width: 300,
    paddingTop: 45,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  radioBtnContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: '100%',
  },
});

export default Gender;

/*<View
  style={{
    borderWidth: 2,
    borderColor: DEFAULT,
    width: '100%',
    height: 45,
    borderRadius: 20,
    marginTop: 20,
  }}>
  <Picker
    selectedValue={null}
    style={{
      height: '100%',
      width: '100%',
      borderRadius: 20,
    }}
    onValueChange={(itemValue, itemIndex) => console.log(itemValue, itemIndex)}>
    <Picker.Item label="Select your pronoun" value={null} />
    <Picker.Item label="He" value="he" />
    <Picker.Item label="She" value="she" />
    <Picker.Item label="They" value="they" />
  </Picker>
</View>;*/
