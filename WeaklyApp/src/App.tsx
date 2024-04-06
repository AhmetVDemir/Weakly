import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screen and Component
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import TodayScreen from './Screens/Today/TodayScreen';
import {WeekDay} from './Helpers/Enums/WeekDays';
import WeekDayScreen from './Screens/WeekDays/WeekDayScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={true ? 'WeekDays' : 'Today'}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Today"
          component={TodayScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WeekDays"
          component={WeekDayScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
