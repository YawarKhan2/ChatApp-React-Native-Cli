import { Text, TouchableOpacity, View } from "react-native";
import Card from "../components/card";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { faUser as faRegularUser, faEnvelope as faRegularEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faAt, faBridgeLock, faEnvelope, faL, faLock } from "@fortawesome/free-solid-svg-icons";
import CustomSignInSignUp from "../components/customSignInSignUp";
import { useNavigation } from "@react-navigation/native";
import StartingAnimation from "../components/StartingAnimation";
import { useState } from "react";

const SignUp = () => {

    const [name, setName] = useState({ value: "", valid: true });
    const [Email, setEmail] = useState({ value: "", valid: true });
    const [username, setUsername] = useState({ value: "", valid: true })
    const [password, setPassword] = useState({ value: "", valid: true })

    const navigation = useNavigation();


    const OnTypeClick = () => {
        navigation.navigate("SignIn")
    }


    const OnClickHandler = () => {

         setName(previousState=>({
            ...previousState,
            valid : name.value.trim().length >=3
         }))


         setPassword(previousState=>({
            ...previousState,
            valid : password.value.trim().length >=8
         }))


         setUsername(previousState=>({
            ...previousState,
            valid : username.value.trim().length >=3
         }))


         setEmail(previousState=>({
            ...previousState,
            valid : Email.value.trim().length >=5 && Email.value.includes("@")
         }))
         
        
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#9b5ed8" }}>
            <View style={{
                width: "100%",
                height: responsiveHeight(40),
                alignItems: "center",
                justifyContent: "space-around"
            }}>
                <StartingAnimation></StartingAnimation>
                <Text style={{
                    fontSize: responsiveFontSize(2.5)
                    ,
                    color: "white",
                    fontWeight: "bold"
                }}>Sign Up</Text>
            </View>


            <Card style={{ flex: 1 }}>


                <CustomInput
                    valid={name.valid}
                    icon={faRegularUser} textConfigs={
                        {
                            placeholder: "Name Surname",
                            value: name.value,
                            onChangeText : (text)=>{setName({valid : true , value : text})}
                        }
                    }></CustomInput>

                <CustomInput
                    valid={Email.valid}
                    icon={faRegularEnvelope} textConfigs={{
                        onChangeText : (text)=>{setEmail({valid : true , value : text})},
                        placeholder: "Email", placeholderTextColor: "#BCBABE", value: Email.value }}></CustomInput>

                <CustomInput
                    valid={username.valid}
                    icon={faAt} textConfigs={{ 
                        onChangeText : (text)=>{setUsername({valid : true , value : text})},
                        placeholder: "User Name", value: username.value }}></CustomInput>

                <CustomInput
                    valid={password.valid}
                    icon={faLock} textConfigs={{ 
                        onChangeText : (text)=>{setPassword({valid : true , value : text})},
                        placeholder: "Password", secureTextEntry: true, value: password.value }}></CustomInput>

                <View style={{ marginTop: responsiveHeight(3) }}>

                    <CustomButton text="Sign Up" onCLick={OnClickHandler}></CustomButton>

                </View>


                <CustomSignInSignUp text="Already Have an Account?" type="Sign In" onClick={OnTypeClick}></CustomSignInSignUp>

            </Card>
        </View>
    )
}

export default SignUp;