
import { Text, View , Image } from "react-native"
import { responsiveFontSize , responsiveWidth , responsiveHeight } from "react-native-responsive-dimensions";

const image = require('../assets/images/onboarding1.png')

const OnBoardingItems =({item}) =>{
    return(
        <View
                style={{


                    width: responsiveWidth(100)

                }}>
                    <View style={{width : "100%" , height : "80%" 
                        ,
                        alignItems : "center",
                        justifyContent : "center",
                        }}>
                    <Image source={image} style={{
                    height :"85%",
                    width : "85%",
                    marginTop: responsiveHeight(8)
                }}></Image>
                    </View>
                
                <View style={{
                    marginTop: responsiveHeight(4),
                    alignItems: "center",
                    paddingHorizontal: responsiveWidth(2)
                }}>

                    <Text
                        style={{
                            fontSize: responsiveFontSize(2.4),
                            textAlign: "center",
                            color: "white",
                           fontWeight :"bold"
                        }}
                    >Messaging with your friend is fun with ChatApp</Text>

                </View>
            </View>
    )
}
export default OnBoardingItems;