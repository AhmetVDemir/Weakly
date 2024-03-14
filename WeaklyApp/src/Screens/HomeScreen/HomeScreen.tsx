
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeStyle from './HomeStyle';

function HomeScreen({ navigation }): React.JSX.Element {
    
    return (
        <SafeAreaView style={HomeStyle.container}>
            <View style={HomeStyle.innerContainer}>
                <Text style={HomeStyle.text}>Weakly Routine Planner</Text>
                <Text style={HomeStyle.text2}>
                Jules Payot : İnsqanlar vazgeçemedikleri arzularının kölesidirler. Kimse hak etmediği sürece özgür olamaz.
                    
                </Text>
                <Text style={HomeStyle.text2}>
                   Aristotales : Mükemmellik bir şey değil bir alışkanlıktır.
                </Text>
            </View>

            <View style={HomeStyle.buttonContainer}>
                <TouchableOpacity style={HomeStyle.button} onPress={()=> navigation.navigate('Today')} >
                    <Text style={HomeStyle.buttonText}>Günü Görüntüle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={HomeStyle.squareButton}>
                    <Text style={HomeStyle.plus}>Rutin Ekle</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

}
export default HomeScreen;