import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import colors from '../../styles/colors';
import images from '../../assets/images';
import {width,height,hScale,vScale} from '../../commons/PerfectPixel';
import LinearGradient from 'react-native-linear-gradient';

export default class SplashScreen extends Component {
    render() {
        return (
            // <View style={{flex:1, backgroundColor:colors.greenLight, alignItems:'center', justifyContent:'center'}}>
                <LinearGradient
                    style={{flex:1, backgroundColor:colors.greenLight, alignItems:'center', justifyContent:'center'}}
                    start={{x: 0.0, y: 0.5}}
                    end={{x: 0.5, y: 1.0}}
                    colors={['#6A62EE', '#56EBFF']}>
                    <Image source={images.logoSplash} style={{width:hScale(140), height: hScale(125)}}/>

                </LinearGradient>
            // </View>
        );
    }
}
