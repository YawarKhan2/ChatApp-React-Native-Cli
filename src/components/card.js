import { View } from "react-native"
import { responsiveWidth } from "react-native-responsive-dimensions";

const Card=({children ,style})=> {
    return (
    <View 
    style={[{
       
        backgroundColor: 'white',
        borderTopLeftRadius : responsiveWidth(8),
        borderTopRightRadius : responsiveWidth(8),
        elevation: 5, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,

    },style]}
    >
        {children}
        </View>
    )
}

export default Card;