import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import OnBoardingScreen from './src/screens/onboardingscreen';
import SignUp from './src/screens/SignUP';
import SignIn from './src/screens/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPassScreen from './src/screens/ForgotPassScreen';
import Toast from 'react-native-toast-message';
import ChatScreen from './src/screens/ChatScreen';
import Chat from './src/screens/Chat';

const stack  = createStackNavigator();





const App  = () => {
  

  return (
    <NavigationContainer >
      
    <SafeAreaView style={{flex :1}} >
      <StatusBar hidden={true}></StatusBar>
    {/* <stack.Navigator initialRouteName='OnboardingScreen' screenOptions={{headerShown : false}}>
        <stack.Screen component={OnBoardingScreen} name='OnboardingScreen'></stack.Screen>
        <stack.Screen component={SignUp} name='SignUp'></stack.Screen>
        <stack.Screen component={SignIn} name='SignIn'></stack.Screen>
        <stack.Screen component={ForgotPassScreen} name="ForgetPass"></stack.Screen>
        <stack.Screen component={ChatScreen} name="ChatScreen"></stack.Screen>
         </stack.Navigator> */}

       <Chat></Chat>
    
    </SafeAreaView>
      <Toast></Toast>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
