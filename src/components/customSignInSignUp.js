

import { View , Text , TouchableOpacity } from "react-native";
import { responsiveHeight  , responsiveWidth} from "react-native-responsive-dimensions";

const CustomSignInSignUp=({text,type , onClick}) =>{

        return (
            <View style={{
                marginTop : responsiveHeight(4),
                alignItems : "center",
                flexDirection : "row",
                justifyContent :"center",
              
            }}>

                <Text style={{color : "black"}}>{text}</Text>

              
              
                <TouchableOpacity 
                onPress={onClick}
                style={{marginLeft : responsiveWidth(2)}}
                
                ><Text style={{color:'#9b5ed8'}}>{type}</Text></TouchableOpacity>
            </View>
        )
}

export default CustomSignInSignUp;