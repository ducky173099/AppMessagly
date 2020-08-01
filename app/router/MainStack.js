import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../Screens/auth/LoginScreen';
import SignupScreen from '../Screens/auth/SignupScreen';
import OTPScreen from '../Screens/auth/OTPScreen';
import SetupProfileScreen from '../Screens/auth/SetupProfileScreen';
import ChatScreen from '../Screens/main/ChatScreen';
import DrawerTab from './DrawerTab';
import Header from '../components/Header';
import ContactScreen from '../Screens/main/ContactScreen';
import ProfileScreen from '../Screens/main/ProfileScreen';
import SettingScreen from '../Screens/main/SettingScreen';
import AboutScreen from '../Screens/main/AboutScreen';



const MainStack = createStackNavigator({
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SignupScreen: {
      screen: SignupScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    OTPScreen: {
      screen: OTPScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SetupProfileScreen: {
      screen: SetupProfileScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    ChatScreen: {
      screen: ChatScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    ContactScreen: {
      screen: ContactScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SettingScreen: {
      screen: SettingScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AboutScreen: {
      screen: AboutScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    DrawerTab: {
        screen: DrawerTab,
        navigationOptions: {
          headerShown: false,
        },
    },
    // Header: {
    //     screen: Header,
    //     navigationOptions: {
    //       headerShown: false,
    //     },
    // },
 
  
  },
  {
    initialRouteName: 'SignupScreen',
    initialRouteParams: {transition: 'fade'},
    // mode: 'modal',
  },
  );

    
  export default MainStack;