import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

function StartScreen({navigation}: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Start Screen -- checking stuff</Text>
    </View>
  );
}

export default StartScreen;
