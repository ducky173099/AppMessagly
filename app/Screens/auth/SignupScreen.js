import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import commonStyle from '../../styles/common';
import {width,height,hScale,vScale} from '../../commons/PerfectPixel';
import images from '../../assets/images';
import colors from '../../styles/colors';
import * as yup from 'yup';
import {Formik} from 'formik';
import { Input, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import { signupAction } from '../../redux/actions/AuthAction';


class SignupScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            userNamedDefault: '',
            mobliePhoneDefault: '',
            mobliePhoneDefault: '',
            passwordDefault: '',
            isShowPass: false,
        }
    };

    _onSendOTP = async values => {
        const user = {userName: values.userName, mobilePhone: values.mobilePhone};
        await this.props.signup(user); 
        this.props.navigation.navigate('OTPScreen'); 

    };


    render() {
        const {userNamedDefault, mobilePhoneDefault} = this.state;
        const {passwordDefault, isShowPass} = this.state;
        return (
            <View style={commonStyle.container}>
                <Image source={images.Logo2} style={styles.logo}/>
                <Text style={styles.wellCome}>Join us today!{'\n'} Please provide your basic info.</Text>
                <View style={{
                    alignItems:'center', 
                    justifyContent:'center', 
                    width: '100%', height: '100%', 
                    position:'absolute',
                    top: hScale(60),
                    left: hScale(40),
                    paddingTop: hScale(205)
                }}>
                    <View style={{height: '100%', width:'100%'}}>
                        <Formik
                            enableReinitialize={true}
                            initialValues={{userName: userNamedDefault, mobilePhone: mobilePhoneDefault}}
                            onSubmit={values => this._onSendOTP(values)}
                            validationSchema={yup.object().shape({
                                userName: yup.string().required("username k bo trong"),
                                mobilePhone: yup.string().required("sdt k dc bo trong"),
                            })}>
                            {({values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit}) => (
                            <>
                                <Input
                                    inputContainerStyle={styles.inputContainerStyle}
                                    inputStyle={[styles.inputStyle, {color: this.state.textColor}]}
                                    label="Your Name"
                                    labelStyle={{fontSize:hScale(14), color: colors.grayLight, fontWeight: '300'}}
                                    onChangeText={handleChange('userName')}
                                    value={values.userName}
                                />
                                {touched.userName && errors.userName && <Text style={styles.textError}>{errors.userName}</Text>}
                                <Input
                                    inputContainerStyle={styles.inputContainerStyle}
                                    inputStyle={[styles.inputStyle, {color: this.state.textColor}]}
                                    label="Mobile Number"
                                    labelStyle={{fontSize:hScale(14), color: colors.grayLight, fontWeight: '300'}}
                                    onChangeText={handleChange('mobilePhone')}
                                    value={values.mobilePhone}
                                    keyboardType='phone-pad'
                                />
                                {touched.mobilePhone && errors.mobilePhone && <Text style={styles.textError}>{errors.mobilePhone}</Text>}
                                <View style={{
                                    width: '100%',
                                    position: 'absolute',
                                    bottom: 20
                                }}>
                                    <Button
                                        title='Send OTP'
                                        onPress={handleSubmit}
                                        buttonStyle={{width: '100%', height: hScale(50)}}
                                        titleStyle={{fontSize: hScale(20)}}
                                        ViewComponent={LinearGradient}
                                        linearGradientProps={{
                                            colors: ['#6A62EE', '#56EBFF'],
                                            start: {x: 0, y: 0.2},
                                            end: {x: 0.8, y: 1},
                                        }}
                                    />
                                </View>
                            </>
                            )}
                        </Formik>
                    </View>
                </View>
            </View>
        )
    }
};


const mapStateToProps = state => {
    return {
        data: state.authReducer,
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signupAction(user)),
    };  
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupScreen);


const styles = StyleSheet.create({
    logo:{
        width: hScale(57),
        height: hScale(47)
    },
    wellCome:{
        color: colors.txtBlack,
        fontSize: hScale(14),
        lineHeight: hScale(25),
        marginTop: hScale(20)
    },
    inputContainerStyle: {
        height: hScale(30),
        borderBottomColor: colors.gray,
        borderBottomWidth: 0.5,
        padding: 0,
        marginBottom: hScale(15)
        // backgroundColor: 'red'
    },
    inputStyle: {
        color: colors.txtBlack,
        fontSize: hScale(16),
        
    },
    textError: {
        color: 'red',
        textAlign: 'left',
        marginLeft: hScale(20),
        marginTop: hScale(-25),
        fontSize: hScale(13)
    },
    pinImage: {
        width: hScale(15),
        height: hScale(15),
        right: hScale(0),
        resizeMode: 'contain',
    },
    btnContinue:{
        width: hScale(327),
        height: hScale(40),
        borderRadius: hScale(100),
        backgroundColor: colors.greenLight,
        
    },
    txtContinue:{
        color: '#fff'
    }
});

