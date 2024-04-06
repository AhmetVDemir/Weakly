import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TodayStyle from './TodayStyle';

function TodayScreen({navigation}): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text style={TodayStyle.text}>Today List : Eğer data varsa</Text>
      <TouchableOpacity
        style={{backgroundColor: '#CCCCCC', padding: 10, alignItems: 'center'}}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#333333'}}>
          Geri
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default TodayScreen;
