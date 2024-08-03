import LottieView from 'lottie-react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';



const StartingAnimation = () =>{
    return (
        <LottieView
            source={require('../animations/chat.json')}
            autoPlay
            loop={false}
            style={{height : responsiveHeight(12) ,
                marginTop : responsiveHeight(2),
                 width :responsiveHeight(12)}}
            >
            </LottieView>
    )
}

export default StartingAnimation;