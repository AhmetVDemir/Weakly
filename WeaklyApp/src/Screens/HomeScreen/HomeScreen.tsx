
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeStyle from './HomeStyle';
function HomeScreen(): React.JSX.Element {
    
    return (
        <SafeAreaView>
            <Text style={HomeStyle.text}>Ana Sayfa Hoş Geldiniz : Eğer data boşsa</Text>
        </SafeAreaView>
    );

}
export default HomeScreen;