import { Text, TouchableOpacity, View } from "react-native"
import colors from "../constants/colors"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Card from "../components/card";
import StartingAnimation from "../components/StartingAnimation";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigation } from "@react-navigation/native";


const ForgotPassScreen =() => {

    const navigation = useNavigation();

    


    return(
     <View style={{flex : 1 , backgroundColor : colors.colorprimary}}>


        <View
        style={{
            height : responsiveHeight(60),
            alignItems : "center",
            justifyContent : "space-around"
        }}
        >
        <StartingAnimation></StartingAnimation>
        <Text style={{color : "white" , 
            fontSize : responsiveFontSize(2) ,
             fontWeight : "bold"}}>Forgot Password</Text>
        </View>
        <Card style={{flex : 1}}>

        <View style={{marginTop : responsiveHeight(2)}}>
                <CustomInput icon={faUser} 
                textConfigs={{
                    placeholder : "Email"
                }}
                ></CustomInput>
                </View>

            <View style={{marginTop : responsiveHeight(3)}}>
                
            <CustomButton text="Forgot Password"></CustomButton>
            </View>
            
            <TouchableOpacity 
            onPress={()=>{
                navigation.goBack();
            }}
           style={{
            height : responsiveHeight(7),
            marginHorizontal : responsiveWidth(5),
            borderRadius : responsiveWidth(4),
            marginTop :responsiveHeight(1),
            alignItems : "center",
            justifyContent : "center",
            elevation : 2,

           }}
            >

                <Text style={{fontSize : responsiveFontSize(1.6)}}>Back</Text>
            </TouchableOpacity>
            
        </Card>
     </View>
     
    )

}

export default ForgotPassScreen;