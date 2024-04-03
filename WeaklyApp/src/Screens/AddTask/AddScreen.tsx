import { Text, View } from "react-native";
import AddStyle from "./AddStyle";

function AddScreen() : React.JSX.Element{

    return(
        <View>
            <Text style={AddStyle.text}>
                Add Screen
            </Text>
        </View>
    );

}

export default AddScreen;