import { FlatList, Image, StyleSheet, Text, View , TextInput, TouchableOpacity } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import colors from "../constants/colors";
import Card from "../components/card";
import UserPic from "../components/UserPic";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight, faArrowRightLong, faBackspace, faBackward, faHandBackFist, faMessage } from "@fortawesome/free-solid-svg-icons";
import _const from "../constants/const";
import Chats from "../components/Chats";
import SearchComponent from "../components/SearchComponent";


const Chat=()=>{

        const renderMessages=({item})=>{
                return(
                    <Chats item={item}></Chats>
                )
        }


    const {messages} = _const;
    return(
        <View style={{flex : 1 , backgroundColor  : colors.colorprimary}}>
        <View 
        style={{height : responsiveHeight(16) , 
            flexDirection : "row",
            alignItems : "center",
            paddingHorizontal : responsiveWidth(5),
            marginTop : responsiveHeight(2)
            
        }}
        >
            <Image source={require('../assets/icons/left-arrow.png')}
            style={{height : responsiveHeight(2) , width : responsiveHeight(2)}}
            
            >
            
            </Image>
            <UserPic></UserPic>
            <View>
                <Text style={[Styles.text , {fontWeight : "bold"}]}>Yawar Khan</Text>
                <Text style={Styles.text}>Online</Text>
            </View>

        </View>

        <Card style={{flex : 1}}>
           <View style={{flex : 1 , marginTop : responsiveHeight(2)}}>
           <FlatList
            data={messages}
            renderItem={renderMessages}
            key={(item)=>item.id.toString()}
            >

                
            </FlatList>
           </View>
           
           <View
        
        style={{
            height : responsiveHeight(6),
            marginHorizontal : responsiveWidth(5),
            borderRadius : responsiveHeight(2),
            borderColor : colors.borderColor,
            borderWidth : responsiveWidth(0.3),
            flexDirection : "row",
            alignItems : "center",
            marginBottom : responsiveHeight(3),
            backgroundColor : colors.colorprimary,
            paddingHorizontal : responsiveWidth(2)

        }}>

        

        <TextInput 
        placeholder="Write Something..."
        placeholderTextColor="white"
        style={{
           fontSize : responsiveFontSize(2),
            flex : 1,
            paddingHorizontal : responsiveWidth(2)
        }}></TextInput>

        <TouchableOpacity>
        <FontAwesomeIcon
        style={{
            marginHorizontal :  responsiveWidth(2)
        }}
        icon={faArrowRightLong} color="white"  size={responsiveFontSize(2.6)}></FontAwesomeIcon>
        </TouchableOpacity>
        
        </View>


        </Card>

        </View>
    )
}


const Styles  = StyleSheet.create({
    text : {
        fontSize : responsiveFontSize(2),
        color :"white"
    }
})
export default Chat;