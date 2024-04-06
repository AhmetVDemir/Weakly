import React from 'react';

import WeekDayStyle from '../../Screens/WeekDays/WeekDayStyle';
import {ScrollView, Text, View, FlatList, TouchableOpacity} from 'react-native';
import DayCard from '../../Components/DayCard';

function WeekDayScreen({navigation}): React.JSX.Element {
  const data = [
    {id: '1', title: 'Başlık 1', items: ['Öğe 1', 'Öğe 2', 'Öğe 3']},
    {id: '2', title: 'Başlık 2', items: ['Öğe 4', 'Öğe 5', 'Öğe 6']},

    {id: '3', title: 'Başlık 3', items: ['Öğe 4', 'Öğe 5', 'Öğe 6']},

    {id: '4', title: 'Başlık 4', items: ['Öğe 4', 'Öğe 5', 'Öğe 6']},

    {id: '5', title: 'Başlık 5', items: ['Öğe 4', 'Öğe 5', 'Öğe 6']},

    {id: '6', title: 'Başlık 6', items: ['Öğe 4', 'Öğe 5', 'Öğe 6']},

    {id: '7', title: 'Başlık 7', items: ['Öğe 4', 'Öğe 5', 'Öğe 6']},
    // İsterseniz daha fazla veri ekleyebilirsiniz
  ];

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <DayCard title={item.title} items={item.items} id={item.id} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{padding: 10}}
        numColumns={2}
      />
      <TouchableOpacity
        style={{backgroundColor: '#CCCCCC', padding: 10, alignItems: 'center'}}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#333333'}}>
          Geri
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default WeekDayScreen;
