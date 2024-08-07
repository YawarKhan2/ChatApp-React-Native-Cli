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
import Toast from "react-native-toast-message";
import axios from "axios";
import consts from "../constants/const";
import LottieView from "lottie-react-native";

const SignUp = () => {

    const { API_URL } = consts

    const [name, setName] = useState({ value: "", valid: true });
    const [Email, setEmail] = useState({ value: "", valid: true });
    const [username, setUsername] = useState({ value: "", valid: true })
    const [password, setPassword] = useState({ value: "", valid: true })
    const [loader, setLoader] = useState(false);

    const navigation = useNavigation();

    const IsLoading = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <LottieView
                    source={require('../animations/Loader.json')}
                    autoPlay
                    loop
                    style={{
                        height: responsiveHeight(16),
                       
                        width: responsiveHeight(16)
                    }}
                >
                </LottieView>
            </View>
        )
    }




    const OnTypeClick = () => {





        navigation.navigate("SignIn")
    }


    const OnClickHandler = async () => {

        const nameValid = name.value.trim().length >= 3;
        const emailValid = Email.value.trim().length >= 5 && Email.value.includes("@");
        const usernameValid = username.value.trim().length >= 3;
        const passwordValid = password.value.trim().length >= 8;

        setName(previousState => ({
            ...previousState,
            valid:nameValid
        }))
        

        setPassword(previousState => ({
            ...previousState,
            valid: passwordValid
        }))


        setUsername(previousState => ({
            ...previousState,
            valid: usernameValid
        }))


        setEmail(previousState => ({
            ...previousState,
            valid: emailValid
        }))
        console.log(name.valid)
        if (nameValid && emailValid&& usernameValid && passwordValid) {
            const API = API_URL + "/auth/register"
            console.log(API)
            try {
                setLoader(true);
                const response = await axios.post(API, {
                    username: username.value,
                    email: Email.value,
                    password: password.value
                })
                setLoader(false);
                Toast.show({
                    type : "success",
                    text1 : "Sucess!",
                    text2 : "Your account have been created successfully!"
                })
            } catch (error) {
               
                setLoader(false)
                Toast.show({
                    type : "error",
                    text1 : "Error!",
                    text2 : error.response.data.message
                })
            } 


        }

    }

    if (loader) {
        return (<IsLoading></IsLoading>)
    }

    return (

        < View style={{ flex: 1, backgroundColor: "#9b5ed8" }
        }>
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
                            onChangeText: (text) => { setName({ valid: true, value: text }) }
                        }
                    }></CustomInput>

                <CustomInput
                    valid={Email.valid}
                    icon={faRegularEnvelope} textConfigs={{
                        onChangeText: (text) => { setEmail({ valid: true, value: text }) },
                        placeholder: "Email", placeholderTextColor: "#BCBABE", value: Email.value
                    }}></CustomInput>

                <CustomInput
                    valid={username.valid}
                    icon={faAt} textConfigs={{
                        onChangeText: (text) => { setUsername({ valid: true, value: text }) },
                        placeholder: "User Name", value: username.value
                    }}></CustomInput>

                <CustomInput
                    valid={password.valid}
                    icon={faLock} textConfigs={{
                        onChangeText: (text) => { setPassword({ valid: true, value: text }) },
                        placeholder: "Password", secureTextEntry: true, value: password.value
                    }}></CustomInput>

                <View style={{ marginTop: responsiveHeight(3) }}>

                    <CustomButton text="Sign Up" onCLick={OnClickHandler}></CustomButton>

                </View>


                <CustomSignInSignUp text="Already Have an Account?" type="Sign In" onClick={OnTypeClick}></CustomSignInSignUp>

            </Card>
        </View >

    )
}

export default SignUp;