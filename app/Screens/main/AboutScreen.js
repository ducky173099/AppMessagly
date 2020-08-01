import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    // Switch
} from 'react-native';
import commonStyle from '../../styles/common';
import {width,height,hScale,vScale} from '../../commons/PerfectPixel';
import images from '../../assets/images';
import colors from '../../styles/colors';
import { Input, Button } from 'react-native-elements';
import Header from '../../components/Header';

export default class AboutScreen extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={commonStyle.containerMain}>
                <Header navigation={navigation} titleHeader={"Abouts Us"} hideBtn={'hide'}/>
                <View style={{width: width, paddingHorizontal: hScale(20), paddingTop: hScale(21)}}>
                    <Text style={{fontSize: hScale(16), color: colors.blueBlue}}>About the app</Text>
                    <View style={{marginTop: hScale(10)}}>
                        <Text style={{fontSize: hScale(16), lineHeight: hScale(28), color: colors.txtBlack, textAlign: 'left'}}>Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci.</Text>
                    </View>
                    <Text style={{fontSize: hScale(16), color: colors.blueBlue, marginTop: hScale(19)}}>Versions</Text>
                    <Text style={{fontSize: hScale(16), color: colors.txtBlack, marginTop: hScale(5)}}>3.2.17 installed on 24-7-17.</Text>
                </View>
            </View>
        )
    }
}
