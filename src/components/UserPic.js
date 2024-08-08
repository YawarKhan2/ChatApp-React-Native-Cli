import { ImageBackground , View} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';




const UserPic=()=>{
    return (
        <View style={{
            height: responsiveHeight(11), width: responsiveHeight(11),
            alignItems: "center",
            justifyContent: "center"
        }}>

            <View style={{
                
                borderRadius: responsiveHeight(5.5),
                height: "70%",
                width: "70%",
                overflow: "hidden"
            }}>
                <ImageBackground
                    source={require('../assets/images/user2.png')}
                    style={{ height: "100%", width: "100%" }}
                >

                </ImageBackground>
            </View>

        </View>
    )
}
export default UserPic;