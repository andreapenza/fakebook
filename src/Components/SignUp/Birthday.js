import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Container from '../Container';
import DatePicker from 'react-native-date-picker';

const Birthday = ({navigation}) => {
  const [date, setDate] = useState(new Date());

  const goToGender = () => {
    navigation.navigate('Gender');
  };

  return (
    <Container>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What's your birthday?</Text>
        <DatePicker
          mode="date"
          date={date}
          onDateChange={setDate}
        />
        <Button
          title="Next"
          containerStyle={{width: '100%', marginTop:20}}
          onPress={goToGender}
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
  innerContainer: {
    flex: 1,
    width: 300,
    paddingTop: 45,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Birthday;
