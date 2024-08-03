import { Image, Text, TouchableOpacity, View } from "react-native"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";


const GoogleLoginButton  = () =>{
return(
    <TouchableOpacity 
    style={{
       
        height : responsiveHeight(7),
        marginHorizontal : responsiveWidth(5),
        borderRadius : responsiveWidth(4),
        marginTop : responsiveHeight(1),
        flexDirection : "row",
        backgroundColor : "white",
        elevation : 2,
        alignItems : "center",
        justifyContent : "center"
    }}
    >

        <Image source={require('../assets/images/googlelogo.png')}
        style={{height : responsiveWidth(6.5),width : responsiveWidth(6.5)}}
        ></Image>

        <Text
        style={{
            color :"#4587F4",
            fontSize : responsiveFontSize(1.5),
            fontWeight : "bold"
        }}
        >Sign In Google</Text>

    </TouchableOpacity>
)
}
export default GoogleLoginButton;