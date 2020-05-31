import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import store from './src/Config/store';
import * as theme from './src/Config/theme';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  SignInScreen,
  SignUpScreen,
  ResetPasswordScreen,
  SplashScreen,
  AuthenticationScreen,
} from './src/Screens';
import {Name, Birthday, Gender, Email, Password} from './src/Components/SignUp';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const AuthStack = createStackNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    (async function() {
      const token = await AsyncStorage.getItem('token');
      if (token) setToken(token);
      else await sleep(1000);

      setLoading(false);
    })();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {loading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AuthStack.Navigator
            screenOptions={{
              headerLeftContainerStyle: {
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
              },
              headerLeft: props => {
                return (
                  <View style={{padding: 15}}>
                    <Icon name="arrow-left" size={20} {...props} />
                  </View>
                );
              },
              headerTitleStyle: {fontSize: 20},
            }}>
            <AuthStack.Screen
              name="Authentication"
              component={AuthenticationScreen}
              options={{
                headerShown: false,
              }}
            />
            <AuthStack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                headerShown: false,
              }}
            />
            <AuthStack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{
                title: 'Create Account',
              }}
            />
            <AuthStack.Screen
              name="ResetPassword"
              component={ResetPasswordScreen}
            />
            <AuthStack.Screen name="Name" component={Name} />
            <AuthStack.Screen name="Birthday" component={Birthday} />
            <AuthStack.Screen name="Gender" component={Gender} />
            <AuthStack.Screen name="Email" component={Email} />
            <AuthStack.Screen name="Password" component={Password} />
          </AuthStack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
};

export default () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <App />
        </StoreProvider>
      </ThemeProvider>
    </>
  );
};
