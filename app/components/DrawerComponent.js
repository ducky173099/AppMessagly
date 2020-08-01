import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import commonStyle from '../styles/common';
import {width,height,hScale,vScale} from '../commons/PerfectPixel';
import images from '../assets/images';
import colors from '../styles/colors';
// import {  SafeAreaView, DrawerItems } from 'react-navigation';
import { DrawerItems } from 'react-navigation-drawer';
import LinearGradient from 'react-native-linear-gradient';

export default class DrawerComponent extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={images.bgDrawer} style={{width: width, height: '100%'}}>
                    <View style={{width: '100%',paddingHorizontal: hScale(30), paddingVertical: hScale(30)}}>
                        <Image source={images.imgUser} style={{width: hScale(60), height: hScale(60)}}/>
                        <Text style={{fontSize: hScale(16), color: colors.white, marginVertical: hScale(10)}}>Kit Harrington</Text>
                        <View style={{width: hScale(175), height: 0.5, backgroundColor: colors.grayLight}}/>
                    </View>
                    <DrawerItems 
                        itemsContainerStyle={{width: hScale(220)}}
                        itemStyle={{paddingLeft: hScale(20)}}
                        inactiveTintColor={colors.white}
                        activeBackgroundColor={colors.rgbaGray}
                        {...this.props} 
                    />

                </ImageBackground>
            </View>
        )
    }
}
