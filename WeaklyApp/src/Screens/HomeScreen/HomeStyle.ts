import { StyleSheet, Dimensions  } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FA8072'
      },
      innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60, 
      },
      text: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
        fontFamily:'Outfit',
        fontWeight:'bold',
        color:'#FFFFFF'
      },
      text2: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 8,
        fontFamily:'Outfit',
        fontWeight:'200',
        color:'#FFFFFF'
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 20, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        width: '100%',
      },
      button: {
        backgroundColor: '#F8A435',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight:'500',
        fontFamily:'Outfit'
      },
      squareButton: {
        backgroundColor: '#BFCFF7',
        padding: 10,
        borderRadius: 5,
      },
      plusButton: {
        flex: 0.5,
      },
      plus: {
        color: 'white',
        fontSize: 20,
        fontWeight:'500',
        fontFamily:'Outfit'
      },


});

export default HomeStyle;