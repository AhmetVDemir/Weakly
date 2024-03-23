import React from 'react';

import WeekDayStyle from '../../Screens/WeekDays/WeekDayStyle'
import { SafeAreaView, Text } from 'react-native';


function WeekDayScreen() : React.JSX.Element {


    return(
        <SafeAreaView>
            <Text style={WeekDayStyle.text}>
                Merhaba
            </Text>

        </SafeAreaView>
    );
}

export default WeekDayScreen;