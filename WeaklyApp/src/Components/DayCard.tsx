import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

function DayCard() : React.JSX.Element {
  return (
    <SafeAreaView>
        <Text style={DayCardStl.text}>Day Card</Text>
    </SafeAreaView>
  )
}

export default DayCard



const DayCardStl = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:"red"
    }
});