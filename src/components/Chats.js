import { StyleSheet, Text, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";


const Chats = ({item}) => {
    const messageStyle = item.type === "sent" ? 
    styles.send : styles.received


    const textStyle = item.type  === "sent" ? 
    styles.textSend : styles.textReceived

    console.log(item.type)
    return (
        <View
            style={{
                height: responsiveHeight(10),
                justifyContent: "center",
                marginTop: responsiveHeight(3),
                marginHorizontal: responsiveWidth(4),
                
                
            }}
        >
            <View style={messageStyle}>
                <Text style={{
                    alignSelf: "flex-start",
                    width: "auto",
                    color : "black",
                    fontSize : responsiveFontSize(2)
                }}>
                    {item.text}</Text>

                    
            </View>
            <Text style={textStyle}>01:02 am</Text>
            

        </View>
    )
}


const styles  = StyleSheet.create({
    send : {
        backgroundColor: "#E9ECF0",
        alignSelf: "flex-end",
        padding: responsiveHeight(1.5),
        borderBottomLeftRadius : responsiveWidth(6),
        borderTopLeftRadius : responsiveWidth(6),
        borderBottomRightRadius : responsiveWidth(6)
    }, 
    received :{
        backgroundColor: "#F6F6F6",
        alignSelf: "flex-start",
        padding: responsiveHeight(1.5),
        borderBottomLeftRadius : responsiveWidth(6),
        borderTopRightRadius : responsiveWidth(6),
        borderBottomRightRadius : responsiveWidth(6),
       
    },

    textSend : {
        alignSelf: "flex-end",
                    width: "auto",
                    color : "grey",
                    fontSize : responsiveFontSize(2),
                    marginRight : responsiveWidth(2)
    },
    textReceived : {
        alignSelf: "flex-start",
                    width: "auto",
                    color : "grey",
                    fontSize : responsiveFontSize(2),
                    marginLeft : responsiveWidth(3)
    }
})
export default Chats;