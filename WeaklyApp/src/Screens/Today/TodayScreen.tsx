import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodayStyle from './TodayStyle';

function TodayScreen(): React.JSX.Element {
      
    return (
        <SafeAreaView>
            <Text>Today List : Eğer data varsa</Text>
        </SafeAreaView>
    );
}

export default TodayScreen;