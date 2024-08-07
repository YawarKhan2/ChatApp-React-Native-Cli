import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TextInput, View } from "react-native"
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import CustomInput from "./CustomInput";
import colors from "../constants/colors";

const SearchComponent=()=>{

    return(
        <View
        
        style={{
            height : responsiveHeight(5),
            marginHorizontal : responsiveWidth(5),
            borderRadius : responsiveHeight(2),
            borderColor : colors.borderColor,
            borderWidth : responsiveWidth(0.3),
            flexDirection : "row",
            alignItems : "center",
            

        }}>
        <FontAwesomeIcon
        style={{
            marginHorizontal :  responsiveWidth(2)
        }}
        icon={faSearch} color="#CDCDCD"  ></FontAwesomeIcon>
        <TextInput 
        
        style={{
           
            flex : 1,
            paddingHorizontal : responsiveWidth(2)
        }}></TextInput>
        </View>
    )
}

export default SearchComponent;