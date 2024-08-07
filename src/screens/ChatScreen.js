import { ImageBackground, Text, View , FlatList } from "react-native"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import SearchComponent from "../components/SearchComponent";
import ChatItem from "../components/ChatItem";

const ChatScreen = () => {

    const ChatItemFun =({item})=>{
        return(
            <ChatItem></ChatItem>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {/* //Top Component */}
            <View style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                marginTop: responsiveHeight(2),
                marginHorizontal: responsiveWidth(3),
                height: responsiveHeight(10)
            }}>

                <Text style={{
                    fontSize: responsiveFontSize(2),
                    fontWeight: "bold",
                    color: "black",
                    marginLeft : responsiveWidth(3)
                }}>Chat</Text>

                <View style={{
                    height: responsiveHeight(12),
                    width: responsiveHeight(12),
                    flexDirection: "row",
                    alignItems: "center",
                       
                    justifyContent: "center"

                }}>

                    <View style={{
                        height: responsiveHeight(1.5),
                        width: responsiveHeight(1.5),
                        backgroundColor: "#91C778",
                        borderRadius: responsiveHeight(0.75),
                        alignSelf: "flex-start",
                        marginRight: responsiveHeight(-1.5),
                        marginTop: responsiveHeight(3)
                    }}>

                    </View>


                    <View
                        style={{
                            backgroundColor: "red",
                            alignItems: "center",
                            justifyContent: "center",
                            height: responsiveHeight(7),
                            width: responsiveHeight(7),
                            borderRadius: responsiveHeight(3.5),
                            overflow: "hidden",
                            zIndex: -1
                        }}>



                        <ImageBackground
                            source={require('../assets/images/person.webp')}
                            style={{
                                height: responsiveHeight(7),
                                zIndex: -1,
                                backgroundColor: "red",
                                width: responsiveHeight(7)
                            }}
                        >


                        </ImageBackground>

                    </View>


                </View>



            </View>
            {/* //Search Component */}
            <View style={{marginTop  : responsiveHeight(1)}}>
            <SearchComponent></SearchComponent> 
            </View>
            
            <View 
            style={{flex : 1 ,  marginTop :responsiveHeight(1)}}
            >

            <FlatList
            data={[1,2,3,4,5,6,7]}
            renderItem={ChatItemFun}
            keyExtractor={(item)=>item.toString()}
            >

            </FlatList>

            </View>

        </View>
    )
}

export default ChatScreen;