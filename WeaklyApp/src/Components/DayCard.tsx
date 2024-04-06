import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

interface PastelCardProps {
  title: string;
  items: string[];
  id: string;
}

const DayCard: React.FC<PastelCardProps> = ({title, items, id}) => {
  return (
    <TouchableOpacity
      style={DayCardStl.card}
      onPress={() => {
        Alert.alert('Id : ', id);
      }}>
      <Text style={DayCardStl.title}>{title}</Text>
      <View style={DayCardStl.divider} />
      <View style={DayCardStl.itemContainer}>
        {items.map((item, index) => (
          <Text key={index} style={DayCardStl.item}>
            {item}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default DayCard;

const DayCardStl = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: '#F0E8E8',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    flex: 1,
    aspectRatio: 0.8,
    maxWidth: '48%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },
  divider: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginVertical: 5,
  },
  itemContainer: {
    marginTop: 5,
  },
  item: {
    fontSize: 14,
    color: '#666666',
  },
});
