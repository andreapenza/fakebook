import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import FacebookLogo from '../Components/FacebookLogo';
import {DEFAULT, BUTTON_BG} from '../Config/theme';
import Icon from 'react-native-vector-icons/Feather';

const AuthenticationScreen = ({navigation}) => {
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.signInLogic}>
        <FacebookLogo />
        <View style={{marginBottom: 15}} />
        <Button
          icon={
            <Icon name="plus" color={DEFAULT} size={20} style={styles.icon} />
          }
          title="Log Into Another Account"
          buttonStyle={styles.accountButtonStyle}
          titleStyle={styles.titleStyle}
        />
        <Button
          icon={
            <Icon name="search" color={DEFAULT} size={20} style={styles.icon} />
          }
          title="Find Your Account"
          buttonStyle={styles.accountButtonStyle}
          titleStyle={styles.titleStyle}
        />
      </View>
      <Button
        title="CREATE NEW FACEBOOK ACCOUNT"
        onPress={goToSignUp}
        buttonStyle={styles.createAccountButtonStyle}
        titleStyle={styles.titleStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: DEFAULT,
  },
  signInLogic: {
    flex: 1,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
    backgroundColor: BUTTON_BG,
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  accountButtonStyle: {
    backgroundColor: 'transparent',
    width: 300,
    justifyContent: 'flex-start',
  },
  createAccountButtonStyle: {
    backgroundColor: BUTTON_BG,
    width: 300,
    height: 35,
    marginBottom: 35,
  },
});

export default AuthenticationScreen;
