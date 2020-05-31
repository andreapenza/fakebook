import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import SignIn from '../Components/SignIn';
import FacebookLogo from '../Components/FacebookLogo';
import Container from '../Components/Container';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignInScreen = ({navigation}) => {
  const top = useState(new Animated.Value(windowHeight / 2 - 22.5))[0];
  const scale = useState(new Animated.ValueXY({x: 1.1, y: 1.1}))[0];
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const slideUp = () => {
      Animated.timing(top, {
        useNativeDriver: false,
        toValue: 50,
        duration: 500,
      }).start();
    };

    const scaleLogo = () => {
      Animated.timing(scale, {
        useNativeDriver: false,
        toValue: {x: 1.4, y: 1.4},
        duration: 500,
      }).start(() => setIsAnimating(false));
    };

    slideUp();
    scaleLogo();
  }, []);

  return (
    <Container>
      {isAnimating ? (
        <Animated.View
          style={{
            position: 'absolute',
            top,
            left: windowWidth / 2 - 22.5,
            transform: [{scaleX: scale.x}, {scaleY: scale.y}],
          }}>
          <FacebookLogo />
        </Animated.View>
      ) : (
        <>
          <View style={styles.logoWrapper}>
            <FacebookLogo />
          </View>
          <SignIn navigation={navigation} />
        </>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  logoWrapper: {
    position: 'absolute',
    top: 50,
    left: windowWidth / 2 - 22.5,
    transform: [{scaleX: 1.4}, {scaleY: 1.4}],
  },
});

export default SignInScreen;
