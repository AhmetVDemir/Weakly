
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Screen and Component
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import TodayScreen from './Screens/Today/TodayScreen';
import { WeekDay } from './Helpers/Enums/WeekDays';


const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={true ? 'Home': 'Today'}>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name='Today' component={TodayScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>

  );

}



export default App;
