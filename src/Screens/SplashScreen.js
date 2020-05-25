import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import useInterval from '../Hooks/useInterval';
import FacebookLogo from '../Components/FacebookLogo';
import {DEFAULT} from '../Config/theme';

const loadingCircles = [0, 1, 2, 3, 4];

const SplashScreen = () => {
  const [activeCircle, setActiveCircle] = useState(0);

  useInterval(() => {
    activeCircle <= 3 ? setActiveCircle(activeCircle + 1) : setActiveCircle(0);
  }, 250);

  return (
    <View style={styles.container}>
      <FacebookLogo />
      <View style={styles.loadingBar}>
        {loadingCircles.map(circle => (
          <View
            key={circle}
            style={
              activeCircle === circle ? styles.activeCircle : styles.circle
            }
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingBar: {
    width: 50,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    width: 7,
    height: 7,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
  },
  activeCircle: {
    width: 7,
    height: 7,
    borderRadius: 10,
    backgroundColor: DEFAULT,
  },
});

export default SplashScreen;
