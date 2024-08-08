import { ImageBackground, Text, View } from "react-native"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import colors from "../constants/colors";
import UserPic from "./UserPic";

const ChatItem = () => {
    return (
        <View style={{
            height: responsiveHeight(10),
            marginTop: responsiveHeight(1),
            marginHorizontal: responsiveWidth(4),
            borderColor: colors.borderColor,
            flexDirection: "row",
            borderBottomWidth: responsiveWidth(0.3)
        }}>

            
           <UserPic></UserPic>

            <View style={{
                height: "100%", width: "60%",
                justifyContent: "center",
                paddingHorizontal: responsiveWidth(1),


            }}>
                <View>

                </View>
                <Text style={{ color: "black", fontWeight: "bold", fontSize: responsiveFontSize(1.8) }}> Yawar Khan</Text>
                <Text style={{ fontSize: responsiveFontSize(1.7), color: "black" }}>Hi What's your  plan today?</Text>

            </View>

            <View style={{
                height: "100%",
                width: "20%",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{color:"grey"}}>02:02 am</Text>

                <View
                    style={{
                        height: responsiveHeight(3),
                        width: responsiveHeight(3),
                        backgroundColor: colors.colorprimary,
                        borderRadius: responsiveHeight(1.5),
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop : responsiveHeight(0.6)
                    }}
                >

                    <Text style={{color: "white" , 
                        fontSize : responsiveFontSize(1.5) , 
                        fontWeight : "bold"}}

                        >3</Text>
                </View>

            </View>
        </View>
    )
}

export default ChatItem;