import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DrawerComponent from '../components/DrawerComponent';
import ChatScreen from '../Screens/main/ChatScreen';
import LoginScreen from '../Screens/auth/LoginScreen';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/colors';
import ContactScreen from '../Screens/main/ContactScreen';
import ProfileScreen from '../Screens/main/ProfileScreen';
import SettingScreen from '../Screens/main/SettingScreen';
import AboutScreen from '../Screens/main/AboutScreen';
import SignupScreen from '../Screens/auth/SignupScreen';

const Drawer = createDrawerNavigator({
    Chats: ChatScreen,
    Contacts: ContactScreen,
    Profile: ProfileScreen,
    Settings: SettingScreen,
    AboutsApp: AboutScreen, 
  }, 
  {
    initialRouteName: 'Chats',
    contentOptions: {
      activeTintColor: colors.white,
    },
    contentComponent: DrawerComponent,
    drawerWidth:'100%',
    
  
    
 
});

export default Drawer;