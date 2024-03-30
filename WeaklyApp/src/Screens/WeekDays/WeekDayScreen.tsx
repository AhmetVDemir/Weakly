import React from 'react';

import WeekDayStyle from '../../Screens/WeekDays/WeekDayStyle'
import { SafeAreaView, Text } from 'react-native';


function WeekDayScreen() : React.JSX.Element {


    return(
        <SafeAreaView>
            <Text style={WeekDayStyle.text}>
                Merhaba Week day screen
            </Text>

        </SafeAreaView>
    );
}

export default WeekDayScreen;