// import React from 'react';
// import {createStackNavigator} from 'react-navigation-stack';
// // import { createDrawerNavigator } from 'react-navigation-drawer';
// // import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
// import LoginScreen from '../Screens/auth/LoginScreen';
// import SignupScreen from '../Screens/auth/SignupScreen';
// import OTPScreen from '../Screens/auth/OTPScreen';
// import SetupProfileScreen from '../Screens/auth/SetupProfileScreen';
// import ChatScreen from '../Screens/main/ChatScreen';



// const Router = createStackNavigator({
//     LoginScreen: {
//       screen: LoginScreen,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     SignupScreen: {
//       screen: SignupScreen,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     OTPScreen: {
//       screen: OTPScreen,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     SetupProfileScreen: {
//       screen: SetupProfileScreen,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     ChatScreen: {
//       screen: ChatScreen,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
 
  
//   },
//   {
//     initialRouteName: 'ChatScreen',
//     initialRouteParams: {transition: 'fade'},
//     // mode: 'modal',
//   },
//   );

    
//   export default Router;

import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import MainStack from './MainStack';

const Router = createStackNavigator({
    MainStack: {
      screen: MainStack,
      navigationOptions: {
        headerShown: false,
      },
    },
  
},
{
  initialRouteName: 'MainStack',
  initialRouteParams: {transition: 'fade'},
  // mode: 'modal',
},
);
    
export default Router;