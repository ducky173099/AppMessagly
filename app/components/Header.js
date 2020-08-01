import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    
} from 'react-native';
import commonStyle from '../styles/common';
import {width,height,hScale,vScale} from '../commons/PerfectPixel';
import images from '../assets/images';
import colors from '../styles/colors';

export default class Header extends Component {


    openDrawer = () =>{
        this.props.navigation.openDrawer();
        // this.props.navigation.navigate.openDrawer()
    };


    render() {
        const {titleHeader, navigation, hideBtn} = this.props;

        console.log('hideBtn: ', hideBtn);


        const showJSX = (
            <TouchableOpacity style={{width: hScale(20), height: hScale(20)}}>
                <Image source={images.iconMore} style={{width: hScale(20), height: hScale(20)}}/>
            </TouchableOpacity>
        );

        const hideJSX = (
            <TouchableOpacity style={{width: hScale(20), height: hScale(20)}}>
                <Image source={images.iconMore} style={{width: hScale(20), height: hScale(20), display: 'none'}}/>
            </TouchableOpacity>
        );

        const mainJSX = hideBtn == 'hide' ? hideJSX : showJSX;


        return (
            <View style={{
                width: width, 
                height: hScale(60), 
                flexDirection: 'row', 
                justifyContent:'space-between', 
                paddingHorizontal: hScale(20),
                alignItems:'center',
                borderBottomWidth: 1,
                borderBottomColor: colors.blackLight
            }}>
                <TouchableOpacity onPress={() => this.openDrawer()}>
                    <Image source={images.iconDrawer} style={{width: hScale(24), height: hScale(16)}}/>
                </TouchableOpacity>
                <Text style={{fontSize: hScale(18), color: colors.txtBlack}}>{titleHeader}</Text>
                {/* <TouchableOpacity style={{width: hScale(20), height: hScale(20)}}>
                    <Image source={images.iconMore} style={{width: hScale(20), height: hScale(20)}}/>
                </TouchableOpacity> */}
                {mainJSX}
            </View>
        )
    }
}
