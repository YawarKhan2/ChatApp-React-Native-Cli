import { Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";


const CustomButton = ({onCLick , text})=>{
    return (
    <TouchableOpacity
    onPress={onCLick}
    style={{
        height : responsiveHeight(7),
        
        marginHorizontal : responsiveWidth(5),
        borderRadius : responsiveWidth(4),
        backgroundColor : "red",
        alignItems : "center",
        justifyContent  : "center",
        backgroundColor : "#9b5ed8"

    }}
    >
        <Text
        style={{
            color : "white",
            fontSize : responsiveFontSize(1.5),
            
        }}
        >{text}</Text>
    </TouchableOpacity>
    )
}

export default CustomButton;