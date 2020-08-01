import {width,height,hScale,vScale} from '../commons/PerfectPixel';
import {StyleSheet} from 'react-native';

const commonStyle = StyleSheet.create({
    container:{
        width: width,
        height: height,
        paddingHorizontal: hScale(40),
        paddingVertical: hScale(60),
        backgroundColor: 'white'
    },
    containerMain:{
        width: width,
        height: height,
        backgroundColor: 'white',
        // paddingTop: hScale(40)
    },

});

export default commonStyle;