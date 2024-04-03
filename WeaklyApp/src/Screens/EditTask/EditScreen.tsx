import { Text, View } from "react-native";
import EditStyle from "./EditStyle";


function EditScreen() : React.JSX.Element{

    return(
        <View>
            <Text style={EditStyle.text}>
                Edit Screen
            </Text>
        </View>
    );
}


export default EditScreen;