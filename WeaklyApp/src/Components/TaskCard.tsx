import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

function TaskCard() : React.JSX.Element {
  return (
    <SafeAreaView>
        <Text style={TaskCardStl.text}>Day Card</Text>
    </SafeAreaView>
  )
}

export default TaskCard



const TaskCardStl = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:"red"
    }
});