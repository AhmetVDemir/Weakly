import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

function AddEditCard() : React.JSX.Element {
  return (
    <SafeAreaView>
        <Text style={AddEditCardStl.text}>Add Edit Card</Text>
    </SafeAreaView>
  )
}

export default AddEditCard



const AddEditCardStl = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:"red"
    }
});