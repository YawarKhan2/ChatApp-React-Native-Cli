import { TextInput, View } from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser as faRegularUser, faEnvelope as faRegularEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock as faSolidLock, faAt as faSolidAt, faUser } from '@fortawesome/free-solid-svg-icons';
import { responsiveFontSize , responsiveHeight , responsiveWidth } from "react-native-responsive-dimensions";
import colors from "../constants/colors";

const CustomInput = ({textConfigs , icon , valid}) => {
    
    return (
        <View style={[{
            flexDirection : "row",
            alignItems : "center",

            borderRadius : responsiveWidth(2),
            backgroundColor : "#FCF9FF",
            paddingHorizontal : responsiveWidth(3),
            marginTop : responsiveHeight(2.5),
            marginHorizontal : responsiveWidth(5)
        } , !valid && {backgroundColor : colors.invalid}]}>


         <FontAwesomeIcon icon={icon} style={{ color: '#525252', fontSize: responsiveFontSize(2) }} />
        <TextInput 
        style={{
            flex : 1,
            color : "black",
            fontSize : responsiveFontSize(1.7),
            paddingVertical : responsiveHeight(2),
            marginHorizontal : responsiveWidth(1)
        }}
        
        {
            ...textConfigs
        }

       
        
       ></TextInput>

        </View>
        
    )
}
export default CustomInput;