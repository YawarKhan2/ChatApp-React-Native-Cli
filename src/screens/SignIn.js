import LottieView from "lottie-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import Card from "../components/card";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { faUser as faRegularUser, faEnvelope as faRegularEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faAt, faBridgeLock, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import CustomSignInSignUp from "../components/customSignInSignUp";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { useNavigation } from "@react-navigation/native";
import StartingAnimation from "../components/StartingAnimation";
import { useState } from "react";

const SignIn= ()=> {
    const [Email, setEmail] = useState({ value: "", valid: true });
    const [password, setPassword] = useState({ value: "", valid: true })


    const navigation  = useNavigation();

    const ForgetPassClick=()=>{
        navigation.navigate('ForgetPass');
    }


   const  OnTypeClick =()=>{
    console.log('pressed')
    navigation.navigate("SignUp");
   }


    const OnClickHandler =() =>{
        
        setEmail(previousState=>({
            ...previousState,
            valid : Email.value.trim().length >=5 && Email.value.includes("@")
         }))
        
        setPassword(previousState=>({
            ...previousState,
            valid : password.value.trim().length >=8
         }))
         

         navigation.navigate("ChatScreen");


    }
    return (
        <View style={{flex : 1 , backgroundColor : "#9b5ed8"}}> 
        <View style={{
            width : "100%",
            height : responsiveHeight(40),
            alignItems : "center",
            justifyContent : "space-around"
        }}>
        <StartingAnimation></StartingAnimation>
            <Text style={{
                fontSize  : responsiveFontSize(2.5)
                ,
                color :  "white",
                fontWeight : "bold"
                }}>Sign In</Text>
        </View>
           

            <Card style={{flex : 1}}>

                   
               

                <CustomInput icon={faRegularEnvelope}
                valid={Email.valid}
                textConfigs={{placeholder : "Email" ,
                    value : Email.value , onChangeText : (text)=>{setEmail({value : text , valid : true})}
                }}></CustomInput>

                

                <CustomInput icon={faLock}
                valid={password.valid}
                textConfigs={{placeholder : "Password" , secureTextEntry : true,
                value : password.value , onChangeText : (text)=>{setPassword({value : text , valid : true})}

                }}></CustomInput>

                <View style={{
                    marginTop : responsiveHeight(2),
                    alignItems : "flex-end",
                    justifyContent :"center",
                    marginHorizontal : responsiveWidth(7)
                  
                }}>

                    <TouchableOpacity 
                        onPress={ForgetPassClick}
                    
                    ><Text style={{color:'#9b5ed8'}}>Forgot Password?</Text></TouchableOpacity>
                </View>

                <View style={{marginTop : responsiveHeight(3)}}>

                <CustomButton text="Login" onCLick={OnClickHandler}></CustomButton>
                <GoogleLoginButton></GoogleLoginButton>
                </View>
                
                <CustomSignInSignUp text="Dont have an account" type="Sign Up" onClick={OnTypeClick}></CustomSignInSignUp>
                
               
            </Card>
        </View>
    )
}

export default SignIn;