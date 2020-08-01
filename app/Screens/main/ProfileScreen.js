import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import commonStyle from '../../styles/common';
import {width,height,hScale,vScale} from '../../commons/PerfectPixel';
import images from '../../assets/images';
import colors from '../../styles/colors';
import { Input, Button } from 'react-native-elements';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';



const Data = {
    statuss : 'Do what you Love!',
    ProfileLink : 'messagly.ct/kitty',
    Account : 'Active'
}


export default class ProfileScreen extends Component {


    render() {
        const {navigation} = this.props;
        return (
            <View style={commonStyle.containerMain}>
                <Header navigation={navigation} titleHeader={"Profile"} hideBtn={'hide'}/>
                <View style={{width: width, alignItems: 'center'}}>
                    <LinearGradient
                        style={{
                            width: width,
                            height: hScale(238),
                            backgroundColor:colors.greenLight, 
                            alignItems:'center', 
                            justifyContent:'center'
                        }}
                        start={{x: 0.0, y: 0.2}}
                        end={{x: 0.8, y: 1.0}}
                        colors={['#6A62EE', '#56EBFF']}
                    >
                        <Image style={{width: hScale(125), height: hScale(125)}} source={images.avaProfile}/>
                        <Text style={{fontSize: hScale(20), color: colors.white, marginTop: hScale(20), marginBottom: hScale(11)}}>Kit Harrington</Text>
                        <Text style={{fontSize: hScale(16), color: colors.grayLight}}>+91 9876543210</Text>
                    </LinearGradient>
                    <View style={{
                        width: width,
                        paddingHorizontal: hScale(20)
                    }}>
                        <View style={{
                            borderBottomWidth: 0.5,
                            borderBottomColor: colors.grayLight,
                            height: hScale(64),
                            marginVertical: hScale(15)
                        }}>
                            <Text style={{fontSize: hScale(16), color: colors.blueBlue}}>Status</Text>
                            <Text style={{marginTop: hScale(13), fontSize: hScale(16), color: colors.txtBlack}}>{Data.statuss}</Text>
                        </View>
                        <View style={{
                            borderBottomWidth: 0.5,
                            borderBottomColor: colors.grayLight,
                            height: hScale(64),
                            marginVertical: hScale(15)
                        }}>
                            <Text style={{fontSize: hScale(16), color: colors.blueBlue}}>Status</Text>
                            <View style={{flexDirection: 'row', justifyContent:'space-between',marginTop: hScale(13)}}>
                                <Text style={{fontSize: hScale(16), color: colors.txtBlack}}>{Data.ProfileLink}</Text>
                                <Text style={{fontSize: hScale(16), color: colors.grayLight}}>Copy</Text>
                            </View>
                        </View>
                        <View style={{
                            borderBottomWidth: 0.5,
                            borderBottomColor: colors.grayLight,
                            height: hScale(64),
                            marginVertical: hScale(15)
                        }}>
                            <Text style={{fontSize: hScale(16), color: colors.blueBlue}}>Status</Text>
                            <View style={{flexDirection: 'row', justifyContent:'space-between',marginTop: hScale(13)}}>
                                <Text style={{fontSize: hScale(16), color: colors.txtBlack}}>{Data.Account}</Text>
                                <Text style={{fontSize: hScale(16), color: colors.grayLight}}>Disable</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
